const mongoose = require('mongoose');

const HomeInfoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cardTitle: {
    type: String,
    required: true,
  },
  cardText: {
    type: String,
    required: true,
  },
  carouselPhotos: [{
    type: String,
  }],
  cardPhotos: [{
    type: String,
  }],
});

const HomeInfo = mongoose.model('HomeInfo', HomeInfoSchema);
module.exports = HomeInfo;

module.exports.update = (homeInfo, callback) => {
  HomeInfo.findOneAndUpdate(
    {},
    {
      $set: {
        title: homeInfo.title,
        cardTitle: homeInfo.cardTitle,
        cardText: homeInfo.cardText,
        carouselPhotos: homeInfo.carouselPhotos,
        cardPhotos: homeInfo.cardPhotos,
      },
    },
    { upsert: true },
    callback,
  );
};

module.exports.get = (callback) => {
  HomeInfo.findOne({}, callback);
};
