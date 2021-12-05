const { ObjectId } = require('mongodb');
const connection = require('../connection');

const updateRecipes = async ({ name, ingredients, preparation, id, userId }) => {
  const db = await connection();
  await db.collection('recipes').updateOne({ _id: ObjectId(id) }, {
    $set: {
      name,
      ingredients,
      preparation,
    },
  });
  return {
    _id: id,
    name,
    ingredients,
    preparation,
    userId,
  };
};

module.exports = updateRecipes;
