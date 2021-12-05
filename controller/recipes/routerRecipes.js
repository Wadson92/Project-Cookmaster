const express = require('express');
const createRecipes = require('./createRecipes');
const readRecipes = require('./readRecipes');
const readRecipesById = require('./readRecipesById');
const deleteRecipesById = require('./deleteRecipesById');
const updateRecipes = require('./updateRecipes');
const auth = require('../../middleware/auth');

const router = express.Router({ mergeParams: true });

router.post('/', auth, createRecipes);
router.get('/', readRecipes);
router.get('/:id', readRecipesById);
router.put('/:id', auth, updateRecipes);
router.delete('/:id', auth, deleteRecipesById);

module.exports = router;
