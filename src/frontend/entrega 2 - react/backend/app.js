const express = require('express');
const connection = require('./config/db'); // Importa o arquivo de configuração do banco de dados

const app = express();
app.use(express.json());

// Rota de teste para verificar a conexão com o banco de dados
app.get('/test-connection', (req, res) => {
    connection.query('SELECT 1 + 1 AS solution', (error, results) => {
        if (error) {
            return res.status(500).json({ message: "Erro ao conectar ao banco de dados", error: error.message });
        }
        res.json({ message: "Conexão bem-sucedida com o banco de dados!", solution: results[0].solution });
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
