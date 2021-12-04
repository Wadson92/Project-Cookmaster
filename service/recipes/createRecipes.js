const createRecipes = require('../../model/recipes/createRecipes');
const { validUser, validUserId } = require('../../middleware/userValidations');

module.exports = async ({ name, ingredients, preparation, userId }) => {
  if (!name || !ingredients || !preparation) {
    throw validUser.message;
  }
  if (!userId) {
    return validUserId;
  }
  const createRec = await createRecipes({ name, ingredients, preparation, userId });
  return createRec;
};
