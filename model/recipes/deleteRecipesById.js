const { ObjectId } = require('mongodb');
const connection = require('../connection');

const deleteRecipeById = async (id) => {
  const db = await connection();
  return db.collection('recipes').deleteOne({ _id: ObjectId(id) });
};

module.exports = deleteRecipeById;
