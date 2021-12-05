const readRecipes = require('../../model/recipes/readRecipes');

module.exports = async () => {
  const read = await readRecipes();
  return read;
};
