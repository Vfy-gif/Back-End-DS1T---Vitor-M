
// Importar o módulo do Express
const express = require('express');

//Criar uma aplicação express
const app = express();

//Definir a porta em que o servidor irá funcionar (escutar)
const porta = 8000;

//Rota de Teste da API
app.get('/api', (req, res) => {
    res.send("API de Usuários está Funcionando")
});

//Rota para Listar Usuários
app.get('/api/listar', (req, res) => {
    //Aqui irei desenvolver a logica para listar os usuarios
})

//Rota para Cadastrar um usuario
app.post('/api/cadastrar', (req, res) => {
    // Cadastro um Usuario
})

//Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
});