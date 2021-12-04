const createRecipes = require('../../service/recipes/createRecipes');

module.exports = async (req, res) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { _id: userId } = req.user;
    const recipe = await createRecipes({ name, ingredients, preparation, userId });
    if (recipe.message) {
      return res.status(401).json(recipe.message);
    }

    return res.status(201).json({ recipe });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
