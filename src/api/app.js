const express = require('express');
const users = require('../../controller/users/router');

const app = express();
app.use(express.json());

app.use('/users', users);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
