const { create, findEmail } = require('../../model/users/createUser');
const { validUser } = require('../../middleware/userValidations');

const validateEmail = /^[a-z0-9_.]+@[a-z0-9]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/i;

const validateUserEmail = (name, email) => {
  if (!email || !name || !validateEmail.test(email)) {
    return validUser;
  }
};

const validateUserPass = (password) => {
  if (!password) {
    return validUser;
  }
};

const emailExists = (email) => {
  if (email) {
    return {
      message: 'Email already registered',
      statusCode: 409,
    };
  }
};

module.exports = async ({ name, email, password }) => {
  const validUsers = validateUserEmail(name, email);
  if (validUsers) return validUsers;
  const validPass = validateUserPass(password);
  if (validPass) return validPass;

  const findEmailUser = await findEmail(email);
  if (findEmailUser) {
    return emailExists(email);
  }
  const createUser = await create({ name, email, password, role: 'user' });
  return createUser;
};
