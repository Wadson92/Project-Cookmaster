const { ObjectId } = require('mongodb');
const connection = require('../connection');

const createImage = async (id, userId, image) => {
  const db = await connection();
  const result = await db.collection('recipes')
  .findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: { image } },
    { returnNewDocument: false },
    );
  return {
    ...result.value,
    image,
  };
};

module.exports = createImage;
