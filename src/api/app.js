const express = require('express');
const path = require('path');
const createUsers = require('../../controller/users/routerCreate');
const createLogin = require('../../controller/users/routerLogin');
const createRecipes = require('../../controller/recipes/routerRecipes');

const app = express();
app.use(express.json());

app.use('/users', createUsers);
app.use('/login', createLogin);
app.use('/recipes', createRecipes);
app.use(express.static(path.resolve(__dirname, '../uploads')));

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
