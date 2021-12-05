const readRecipesById = require('../../service/recipes/readRecipesById');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const getRecipesById = await readRecipesById({ id });
    return res.status(200).json(getRecipesById);    
  } catch (error) {
    res.status(404).json({ message: 'recipe not found' });
  }
};
