const createImage = require('../../model/recipes/createImage');

module.exports = async (id, userId, image) => {
  const createImg = await createImage(id, userId, image);
  return createImg;
};