const express = require('express');
const createRecipes = require('./createRecipes');
const readRecipes = require('./readRecipes');
const readRecipesById = require('./readRecipesById');
const deleteRecipesById = require('./deleteRecipesById');
const updateRecipes = require('./updateRecipes');
const createImage = require('./createImage');
const auth = require('../../middleware/auth');
const multerConfig = require('../../middleware/multer');

const router = express.Router({ mergeParams: true });

router.post('/', auth, createRecipes);
router.get('/', readRecipes);
router.get('/:id', readRecipesById);
router.put('/:id/image', auth, multerConfig.single('image'), createImage);
router.put('/:id', auth, updateRecipes);
router.delete('/:id', auth, deleteRecipesById);

module.exports = router;
