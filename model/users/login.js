const connection = require('../connection');

const findLogin = async ({ password, email }) => {
  const db = await connection();
  return db.collection('users').findOne({ password, email });
};

module.exports = findLogin;
