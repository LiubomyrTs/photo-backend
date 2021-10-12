const express = require('express');
const multer = require('multer');
const passport = require('passport');

const Blog = require('../models/blog');

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

router.post('/', passport.authenticate('jwt', { session: false }), upload.single('cover'), (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    subtitle: req.body.subtitle,
    cover: req.file.path,
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

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Blog.getAll((err, blogs) => {
    if (err) throw err;
    res.json(blogs);
  });
});

module.exports = router;
