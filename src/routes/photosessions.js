const express = require('express');
const multer = require('multer');

const fs = require('fs');
const util = require('util');
const { uploadFile } = require('../s3');
const Photosession = require('../models/photosession');
const transliterate = require('../utils/transliterate');

const unlinkFile = util.promisify(fs.unlink);

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

const router = express.Router();

router.post(
  '/',
  upload.fields([
    {
      name: 'photos[]',
      maxCount: 300,
    },
    {
      name: 'cover',
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    const { username, title } = req.body;
    const folderTitle = transliterate(title.trim().replace(/\s/g, '-'));
    let photos = req.files['photos[]'].map(async (f) => {
      const result = await uploadFile(f, `photosessions/${username}/${folderTitle}/`);
      await unlinkFile(f.path);
      return `images/${result.key}`;
    });

    await Promise.all(photos).then((v) => {
      photos = v;
    });

    const coverUploadResult = await uploadFile(req.files.cover[0]);
    await unlinkFile(req.files.cover[0].path);

    const photosession = new Photosession({
      title: req.body.title,
      date: req.body.date,
      userId: req.body.userId,
      photos,
      cover: `images/${coverUploadResult.key}`,
    });

    Photosession.save(photosession, (e) => {
      if (e) {
        res.status(500).send({ success: false, msg: 'Failed to add photosession' });
      } else {
        res.json({ success: true, msg: 'Photosession was successfuly added' });
      }
    });
  },
);

router.get('/', (req, res) => {
  const { userId } = req.query;
  // console.log('------');
  // getFilesFromList();
  // console.log('------');

  Photosession.getUsersPhotosessions(userId, (e, photosessions) => {
    if (e) {
      res.status(500).send({ success: false, msg: 'Failed to get users photosessions' });
    } else {
      res.json(photosessions);
    }
  });
});

router.get('/:id', (req, res) => {
  const photosessionId = req.params.id;
  // console.log('------');
  // getFilesFromList();
  // console.log('------');

  Photosession.getById(photosessionId, (e, photosessions) => {
    if (e) {
      res.status(500).send({ success: false, msg: 'Failed to get users photosessions' });
    } else {
      res.json(photosessions);
    }
  });
});

module.exports = router;
