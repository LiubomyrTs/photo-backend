const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;

module.exports.getAll = (callback) => {
  const query = {};
  Blog.find(query, callback);
};

module.exports.addBlog = (newBlog, callback) => {
  newBlog.save(callback);
};
