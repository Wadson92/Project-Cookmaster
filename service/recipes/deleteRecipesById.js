const deleteRecipesById = require('../../model/recipes/deleteRecipesById');
const { deleteRecipe } = require('../../middleware/userValidations');

module.exports = async (id, userId) => {
  if (!userId) {
    throw deleteRecipe;
  }
  const delId = await deleteRecipesById(id);
  return delId;
};
