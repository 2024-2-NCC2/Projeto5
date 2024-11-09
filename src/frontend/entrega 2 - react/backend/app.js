const express = require('express');
const connection = require('./config/db'); 
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.get('/test-connection', async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT 1 + 1 AS solution');
        res.json({ message: "Conexão bem-sucedida com o banco de dados!", solution: rows[0].solution });
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error.message);
        res.status(500).json({ message: "Erro ao conectar ao banco de dados", error: error.message });
    }
});

app.post('/criar', (req, res) => {
    const { nome, email, telefone, data_nasc, senha } = req.body;

    // Log para verificar os valores recebidos
    console.log("Dados recebidos:", { nome, email, telefone, data_nasc, senha });

    if (!nome || !email || !telefone || !data_nasc || !senha) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    connection.query(
        'INSERT INTO Usuario (nome, email, telefone, data_nasc, senha) VALUES (?, ?, ?, ?, ?)',
        [nome, email, telefone, data_nasc, senha],
        (error, results) => {
            if (error) {
                console.error("Erro ao registrar usuário:", error);
                return res.status(500).json({ message: "Erro ao registrar usuário", error: error.message });
            }
            res.status(201).json({ message: "Usuário registrado com sucesso!" });
        }
    );
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
