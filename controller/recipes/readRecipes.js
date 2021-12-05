const readRecipes = require('../../service/recipes/readRecipes');

module.exports = async (_req, res) => {
  try {
    const getRecipes = await readRecipes();
    return res.status(200).json(getRecipes);    
  } catch (error) {
    res.status(500).end();
  }
};
