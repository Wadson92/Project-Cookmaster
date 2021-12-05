const createImage = require('../../service/recipes/createImage');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: userId } = req.user;
    const LOCAL_URI = 'localhost:3000';
    const image = `${LOCAL_URI}/src/uploads/${id}.jpeg`; 
    const img = await createImage(id, userId, image);
    return res.status(200).json(img);
  } catch (error) {
    console.log(error);
  }
};
