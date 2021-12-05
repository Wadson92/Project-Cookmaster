const deleteRecipesById = require('../../service/recipes/deleteRecipesById');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: userId } = req.user;
    await deleteRecipesById(id, userId);
    return res.status(204).json();   
  } catch (error) {
    res.status(404).json(error);
  }
};
