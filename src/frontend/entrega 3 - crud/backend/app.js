require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { generateToken } = require('./auth');
const authMiddleware = require('./authMiddleware');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json()); // Configura para processar JSON

// Configura a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST, // Exemplo: 'localhost'
    user: process.env.DB_USER, // Seu usuário do MySQL
    password: process.env.DB_PASSWORD, // Sua senha do MySQL
    database: process.env.DB_NAME, // Nome do seu banco de dados
});

// Verifica a conexão com o banco de dados
connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
    } else {
        console.log("Conectado ao banco de dados com sucesso!");
    }
});


app.get('/protected-route', authMiddleware, (req, res) => {
    res.send("Essa rota só pode ser acessada por usuários autenticados.");
});


app.get('/test-connection', async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT 1 + 1 AS solution');
        res.json({ message: "Conexão bem-sucedida com o banco de dados!", solution: rows[0].solution });
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error.message);
        res.status(500).json({ message: "Erro ao conectar ao banco de dados", error: error.message });
    }
});

app.get('/usuarios', authMiddleware, (req, res) => {
    connection.query('SELECT * FROM Usuario', (error, results) => {
        if (error) {
            console.error("Erro ao obter a lista de usuários:", error);
            return res.status(500).json({ message: "Erro ao obter a lista de usuários", error: error.message });
        }
        res.status(200).json(results);
    });
});

app.post('/criar', async (req, res) => {
    const { nome, email, telefone, data_nasc, senha } = req.body;

    console.log("Dados recebidos:", { nome, email, telefone, data_nasc, senha });

    if (!nome || !email || !telefone || !data_nasc || !senha) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    try {
        const hashedSenha = await bcrypt.hash(senha, 10); // Hash da senha

        connection.query(
            'INSERT INTO Usuario (nome, email, telefone, data_nasc, senha) VALUES (?, ?, ?, ?, ?)',
            [nome, email, telefone, data_nasc, hashedSenha],
            (error, results) => {
                if (error) {
                    console.error("Erro ao registrar usuário:", error);
                    return res.status(500).json({ message: "Erro ao registrar usuário", error: error.message });
                }
                else{
                res.status(201).json({ message: "Usuário registrado com sucesso!" });
            }
        }
        );
    } catch (error) {
        console.error("Erro ao hash a senha:", error);
        res.status(500).json({ message: "Erro ao processar a senha", error: error.message });
    }
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body; // Obtém do corpo da requisição

    if (!email || !senha) {
        return res.status(400).json({ message: "Email e senha são obrigatórios" });
    }

    const trimmedSenha = senha.trim();

    connection.query(
        'SELECT * FROM Usuario WHERE email = ?',
        [email],
        async (error, results) => {
            if (error) {
                console.error("Erro ao fazer login:", error);
                return res.status(500).json({ message: "Erro ao fazer login", error: error.message });
            }

            if (results && results.length > 0) {
                const user = results[0];
                const match = await bcrypt.compare(trimmedSenha, user.senha);
                if (match) {
                    const token = generateToken(user);
                    console.log("Usuário autenticado:", user, token);
                    res.status(200).json({ message: "Login bem-sucedido", token });
                } else {
                    res.status(401).json({ message: "Credenciais inválidas" });
                }
            } else {
                res.status(401).json({ message: "Credenciais inválidas" });
            }
        }
    );
});

app.post('/save-quiz', authMiddleware, (req, res) => {
    const { score, investorProfile } = req.body;
    const userId = req.user.id;

    if (!score || !investorProfile) {
        return res.status(400).json({ message: "Pontuação e perfil de investidor são obrigatórios" });
    }

    const dataRespostas = new Date();

    connection.query(
        'INSERT INTO QuizPerfilInvestidor (data_respostas, perfil_calculado, usuario_id) VALUES (?, ?, ?)',
        [dataRespostas, investorProfile, userId],
        (error, results) => {
            if (error) {
                console.error("Erro ao salvar o resultado do quiz:", error);
                return res.status(500).json({ message: "Erro ao salvar o resultado do quiz", error: error.message });
            }
            res.status(201).json({ message: "Resultado do quiz salvo com sucesso!" });
            console.log("Resultado do quiz salvo com sucesso:", { userId, score, investorProfile });
        }
    );
});


const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
