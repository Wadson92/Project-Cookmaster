const express = require('express');
const createRecipes = require('./createRecipes');
const auth = require('../../middleware/auth');

const router = express.Router({ mergeParams: true });

router.post('/', auth, createRecipes);

module.exports = router;
