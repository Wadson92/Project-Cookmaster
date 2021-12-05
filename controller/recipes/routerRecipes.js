const express = require('express');
const createRecipes = require('./createRecipes');
const readRecipes = require('./readRecipes');
const auth = require('../../middleware/auth');

const router = express.Router({ mergeParams: true });

router.post('/', auth, createRecipes);
router.get('/', readRecipes);

module.exports = router;
