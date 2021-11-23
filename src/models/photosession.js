const mongoose = require('mongoose');

const PhotosessionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  photos: [{
    type: String,
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Photosession = mongoose.model('Photosession', PhotosessionSchema);

module.exports = Photosession;

module.exports.save = (photosession, callback) => {
  photosession.save(callback);
};

module.exports.getUsersPhotosessions = (userId, callback) => {
  Photosession.find({ userId }, callback);
};

module.exports.getById = (photosessionId, callback) => {
  Photosession.findById(photosessionId, callback);
};

module.exports.delete = (id, callback) => {
  Photosession.findOneAndDelete(id, callback);
};
