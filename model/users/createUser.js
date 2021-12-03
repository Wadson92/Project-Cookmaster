// const { ObjectId } = require('mongodb');
const connection = require('../connection');

const findEmail = async (email) => {
  const db = await connection();
  const find = await db.collection('users').findOne({ email });
  return find;
};

const create = async (entity) => {
  const db = await connection();
  const createUser = await db.collection('users').insertOne(entity);
  const { name, email, role, _id } = createUser.ops[0]; 
  return {
    name,
    email,
    role,
    _id,
  };
};

module.exports = { create, findEmail };