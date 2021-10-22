const express = require('express');
const multer = require('multer');
const passport = require('passport');
const gm = require('gm');
const path = require('path');

const HomeInfo = require('../models/home');

const router = express.Router();
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads');
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${uniqueSuffix}${file.originalname.substring(file.originalname.lastIndexOf('.'))}`);
  },
});
const upload = multer({ storage });

const fileHandler = (req, res, fieldName, ratio) => {
  req.files[fieldName].forEach(async (f) => {
    let cropValues;
    const p = new Promise((resolve, reject) => {
      gm(path.join(__dirname, '../../', f.path))
        .identify((err, value) => {
          let min;
          if (value.size.height > value.size.width) {
            min = value.size.width;
            cropValues = [min / ratio, min];
          } else {
            min = value.size.height;
            cropValues = [min * ratio, min];
          }
          console.log(cropValues);
          resolve();
          if (err) { reject(); }
        });
    });

    p.then(() => {
      gm(path.join(__dirname, '../../', f.path))
        .gravity('Center')
        .crop(...cropValues)
        .noProfile()
        .write(path.join(__dirname, '../../', f.path), (err) => {
          if (err) { res.send(500).json({ success: false, msg: 'GM Error' }); }
          if (!err) { console.log('done'); }
        });
    });
  });
};

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  upload.fields([
    {
      name: 'carouselPhotos[]',
      maxCount: 5,
    },
    {
      name: 'cardPhotos[]',
      maxCount: 2,
    },
  ]),
  (req, res) => {
    console.log('------');

    fileHandler(req, res, 'carouselPhotos[]', 1.5);
    fileHandler(req, res, 'cardPhotos[]', 1.5);
    console.log('------');

    const carouselPhotos = req.files['carouselPhotos[]'].map((f) => f.path);
    const cardPhotos = req.files['cardPhotos[]'].map((f) => f.path);

    const homeInfo = new HomeInfo({
      title: req.body.title,
      cardTitle: req.body.cardTitle,
      cardText: req.body.cardText,
      carouselPhotos,
      cardPhotos,
    });

    HomeInfo.update(homeInfo, (e) => {
      if (e) {
        res.send(500, { success: false, msg: 'Failed to add homeinfo' });
      } else {
        res.json({ success: true, msg: 'Home info successfuly updated' });
      }
    });
  },
);

router.get('/', (req, res) => {
  // if (error) throw error;
  HomeInfo.get((err, homeInfo) => {
    if (err) throw err;
    res.json(homeInfo);
  });
});

module.exports = router;
