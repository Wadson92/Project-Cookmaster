const express = require('express');
const createUsers = require('../../controller/users/routerCreate');
const createLogin = require('../../controller/users/routerLogin');

const app = express();
app.use(express.json());

app.use('/users', createUsers);
app.use('/login', createLogin);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
