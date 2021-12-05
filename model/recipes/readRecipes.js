const connection = require('../connection');

const readRecipe = async () => {
  const db = await connection();
  return db.collection('recipes').find().toArray();
};

module.exports = readRecipe;
