const createUser = require('../../service/users/createUser');

module.exports = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const create = await createUser({ name, email, password });
    if (create.message) {
      return res.status(create.statusCode).json({ message: create.message });
    }
    return res.status(201).json({ user: create });
  } catch (error) {
    res.status(400).status(error);
  }
};
