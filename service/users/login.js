const findLogin = require('../../model/users/login');
const { validLogin, validEmailOrPass } = require('../../middleware/userValidations');

module.exports = async ({ email, password }) => {
  console.log('Chegou no service'); 
  if (!email || !password) {
    throw validLogin;
  }
  const findPassAndEmail = await findLogin({ password, email });
  if (!findPassAndEmail) {
    throw validEmailOrPass;
  }
  return findPassAndEmail;
};
