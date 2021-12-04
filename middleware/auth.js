const jwt = require('jsonwebtoken');

const { validUserId } = require('./userValidations');

const API_SECRET = 'mySecret';

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json(validUserId);
    }
    const { data } = jwt.verify(authorization, API_SECRET);
    req.user = data;
    next();
  } catch (error) {
    res.status(401).send(validUserId);
  }
};
