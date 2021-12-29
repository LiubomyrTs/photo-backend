/* eslint-disable prefer-destructuring */
const express = require('express');
const multer = require('multer');
const passport = require('passport');
const fs = require('fs');
const util = require('util');

const { uploadFile } = require('../s3');
const Favor = require('../models/favor');
const cutImage = require('../utils/cutImage');

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

router.post('/', passport.authenticate('jwt', { session: false }), upload.single('cover'), async (req, res) => {
  // await cutImage(req, res, 3);

  // const result = await uploadFile(req.file);
  // await unlinkFile(req.file.path);

  const favor = new Favor({
    description: req.body.description,
    type: req.body.type,
    // cover: `images/${result.key}`,
    content: req.body.content,
  });

  console.log(favor);

  Favor.update(favor, (e) => {
    if (e) {
      res.json({ success: false, msg: 'Error' });
    } else {
      res.json({ success: true, msg: 'Сторінку послуги оновлено' });
    }
  });
});

router.get('/', (req, res) => {
  Favor.getByType((err, favor) => {
    if (err) throw err;
    res.json(favor);
  });
});

module.exports = router;
