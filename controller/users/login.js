const jwt = require('jsonwebtoken');
const login = require('../../service/users/login');

const createLogin = async (req, res) => {
  console.log('chegou aqui');
  try {
    const API_SECRET = 'mySecret';
    const jwtConfig = {
      expiresIn: '15h',
      algorithm: 'HS256',
    };
    const { email, password } = req.body;
    const loginService = await login({ email, password });
    const { password: passDB, ...userWithoutPass } = loginService; 
    const token = jwt.sign({ data: userWithoutPass }, API_SECRET, jwtConfig);
    return res.status(200).json({ token });
  } catch (error) {
    res.status(401).json(error);
  }
};

module.exports = createLogin;
