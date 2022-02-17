const mongoose = require('mongoose');

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

module.exports.editBlog = (blog, callback) => {
  Blog.findByIdAndUpdate(
    blog.id,
    {
      $set: {
        title: blog.title,
        subtitle: blog.subtitle,
        cover: blog.cover,
        content: blog.content,
      },
    },
    callback,
  );
};

module.exports.getById = (id, callback) => {
  Blog.findById(id, callback);
};

module.exports.deleteBlog = (id, callback) => {
  Blog.findOneAndDelete(id, callback);
};
