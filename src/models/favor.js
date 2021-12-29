const mongoose = require('mongoose');

const FavorSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Favor = mongoose.model('Favor', FavorSchema);
module.exports = Favor;

module.exports.getByType = (type, callback) => {
  const query = { type };
  Favor.find(query, callback);
};

module.exports.update = (favor, callback) => {
  Favor.findOneAndUpdate(
    { type: favor.type },
    {
      $set: {
        description: favor.description,
        type: favor.type,
        cover: favor.cover,
        content: favor.content,
      },
    },
    { upsert: true },
    callback,
  );
};
