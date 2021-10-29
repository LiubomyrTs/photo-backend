/* eslint-disable prefer-destructuring */
const express = require('express');
const multer = require('multer');
const passport = require('passport');
const fs = require('fs');
const util = require('util');

const { uploadFile } = require('../s3');
const Blog = require('../models/blog');
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
  await cutImage(req, res, 1.5);

  const result = await uploadFile(req.file);
  await unlinkFile(req.file.path);

  const newBlog = new Blog({
    title: req.body.title,
    subtitle: req.body.subtitle,
    cover: `images/${result.key}`,
    content: req.body.content,
  });

  Blog.addBlog(newBlog, (e) => {
    if (e) {
      res.json({ success: false, msg: 'Failed to add blog' });
    } else {
      res.json({ success: true, msg: 'User added' });
    }
  });
});

router.get('/', (req, res) => {
  Blog.getAll((err, blogs) => {
    if (err) throw err;
    res.json(blogs);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Blog.deleteBlog(id, (err) => {
    if (err) throw err;
    res.json({ sucess: true, msg: 'Блог видалено' });
  });
});

router.get('/:id', (req, res) => {
  // const listResponse = getFilesFromList(getFilesFromList);
  // console.log('------');
  // console.log('------');
  // console.log(listResponse);
  console.log('------');
  console.log('------');

  const id = req.params.id;
  Blog.getById(id, (err, blog) => {
    if (err) throw err;
    res.json(blog);
  });
});

module.exports = router;
