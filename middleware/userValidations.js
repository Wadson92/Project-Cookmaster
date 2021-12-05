const MESSAGE_ERROR = 'Invalid entries. Try again.';
const ERROR_USER = 'All fields must be filled';
const ERROR_EMAILORPASS = 'Incorrect username or password';
const ERROR_USERID = 'jwt malformed';

const validUser = {
  message: MESSAGE_ERROR,
  statusCode: 400,
};

const validLogin = {
  message: ERROR_USER,
};

const validEmailOrPass = {
  message: ERROR_EMAILORPASS,
};

const validUserId = {
  message: ERROR_USERID,
};

const validRecipeId = {
  message: 'recipe not found',
};

module.exports = {
  validUser,
  validLogin,
  validEmailOrPass,
  validUserId,
  validRecipeId,
};
