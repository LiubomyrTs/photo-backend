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
    // console.log('cardPhotos');
    // req.files['carouselPhotos[]'].forEach((f) => {
    //   console.log('22222');
    //   gm(path.join(__dirname, '../../', f.path))
    //     .resize('768', '1024', '^')
    //     .gravity('Center')
    //     .crop('768', '1024')
    //     .noProfile()
    //     .write(path.join(__dirname, '../../', f.path), (err) => {
    //       if (err) { console.log(err); res.send(500).json({ success: false, msg: 'GM Error' }); }
    //       if (!err) { console.log('done'); }
    //     });
    // });

    const carouselPhotos = req.files['carouselPhotos[]'].map((f) => f.path);
    const cardPhotos = req.files['cardPhotos[]'].map((f) => f.path);

    console.log(cardPhotos);

    const homeInfo = new HomeInfo({
      title: req.body.title,
      cardTitle: req.body.cardTitle,
      cardText: req.body.cardText,
      carouselPhotos,
      cardPhotos,
    });

    HomeInfo.update(homeInfo, (e) => {
      if (e) {
        console.log(e);
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
    console.log(homeInfo);
    res.json(homeInfo);
  });
});

module.exports = router;
