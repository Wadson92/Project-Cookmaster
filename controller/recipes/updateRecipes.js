const updateRecipes = require('../../service/recipes/updateRecipes');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: userId } = req.user;
    const { name, ingredients, preparation } = req.body;
    const recipe = await updateRecipes({ id, name, ingredients, preparation, userId });
    return res.status(200).json(recipe);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
