const express = require('express');

const app = express();

app.use(express.json());

const porta = 7000;

app.get('/api', (req, res) => {
    res.send("API de Produtos está Funcionando")
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
});