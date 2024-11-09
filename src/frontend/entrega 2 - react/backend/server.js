require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Configura para processar JSON

// Configura a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    senha: process.env.DB_senha,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
    } else {
        console.log("Conectado ao banco de dados com sucesso!");
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

// Inicia o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
