const { ObjectId } = require('mongodb');
const connection = require('../connection');

const readRecipeById = async (id) => {
  const db = await connection();
  return db.collection('recipes').findOne(ObjectId(id));
};

module.exports = readRecipeById;
