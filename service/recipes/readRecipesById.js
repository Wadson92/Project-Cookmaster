const readRecipeById = require('../../model/recipes/readRecipesById');
const { validRecipeId } = require('../../middleware/userValidations');

module.exports = async ({ id }) => {
  if (!id) {
    throw validRecipeId;
  }
  const readId = await readRecipeById(id);
  return readId;
};
