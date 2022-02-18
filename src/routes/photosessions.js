const express = require('express');
const multer = require('multer');

const fs = require('fs');
const util = require('util');
const compressImage = require('../utils/compressImage');
const { uploadFile } = require('../s3');
const Photosession = require('../models/photosession');
const transliterate = require('../utils/transliterate');
const cutImage = require('../utils/cutImage');

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
      try {
        await compressImage(f);
      } catch (e) {
        res.status(500).json('failed compressing photo');
      }

      try {
        const result = await uploadFile(`${f.path}`, `photosessions/${username}/${folderTitle}/`);
        await unlinkFile(`${f.path}`);
        return `images/${result.key}`;
      } catch (e) {
        res.status(500).json('failed uploading photo');
      }
    });

    await Promise.all(photos).then((v) => {
      photos = v;
    });

    await compressImage(req.files.cover[0]);
    await cutImage(req, res, 1.75, 'cover');
    const coverUploadResult = await uploadFile(req.files.cover[0].path);
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
        console.error(e);
        res.status(500).send({ success: false, msg: 'Failed to add photosession' });
      } else {
        res.json({ success: true, msg: 'Photosession was successfuly added' });
      }
    });
  },
);

router.get('/', (req, res) => {
  const { userId } = req.query;

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

  Photosession.getById(photosessionId, (e, photosessions) => {
    if (e) {
      res.status(500).send({ success: false, msg: 'Failed to get users photosessions' });
    } else {
      res.json(photosessions);
    }
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Photosession.delete(id, (err) => {
    if (err) throw err;
    res.json({ sucess: true, msg: 'Фотосесію видалено' });
  });
});

module.exports = router;
