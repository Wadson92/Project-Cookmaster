const updateRecipes = require('../../model/recipes/updateRecipes');

module.exports = async ({ id, name, ingredients, preparation, userId }) => {
  const updateRec = await updateRecipes({ id, name, ingredients, preparation, userId });
  return updateRec;
};
