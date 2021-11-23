const express = require('express');
const multer = require('multer');
const passport = require('passport');
const fs = require('fs');
const util = require('util');

const cutImage = require('../utils/cutImage');

const { uploadFile } = require('../s3');

const HomeInfo = require('../models/home');

const unlinkFile = util.promisify(fs.unlink);

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
  async (req, res) => {
    console.log(req.files['carouselPhotos[]']);
    await cutImage(req, res, 2.5, 'carouselPhotos[]');
    await cutImage(req, res, 1.5, 'cardPhotos[]');

    let carouselPhotos = req.files['carouselPhotos[]'].map(async (f) => {
      const result = await uploadFile(f, 'home/');
      await unlinkFile(f.path);
      return `images/${result.key}`;
    });

    let cardPhotos = req.files['cardPhotos[]'].map(async (f) => {
      const result = await uploadFile(f, 'home/');
      await unlinkFile(f.path);
      return `images/${result.key}`;
    });

    await Promise.all(carouselPhotos).then((v) => {
      carouselPhotos = v;
    });

    await Promise.all(cardPhotos).then((v) => {
      cardPhotos = v;
    });

    const homeInfo = new HomeInfo({
      title: req.body.title,
      cardTitle: req.body.cardTitle,
      cardText: req.body.cardText,
      carouselPhotos,
      cardPhotos,
    });

    HomeInfo.update(homeInfo, (e) => {
      if (e) {
        res.status(500).send({ success: false, msg: 'Failed to add homeinfo' });
      } else {
        res.json({ success: true, msg: 'Home info successfuly updated' });
      }
    });
  },
);

router.get('/', (req, res) => {
  // eslint-disable-next-line no-debugger
  HomeInfo.get((err, homeInfo) => {
    if (err) throw err;
    res.json(homeInfo);
  });
});

module.exports = router;
