const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

module.exports.getUserById = (id, callback) => {
  User.findById(id, callback);
};

module.exports.getUserByUsername = (username, callback) => {
  const query = { username };
  User.findOne(query, callback);
};

module.exports.addUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (error, hash) => {
      if (error) throw error;
      const updatedUser = newUser;
      updatedUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};

module.exports.getAll = (callback) => {
  const query = { role: 'CUSTOMER' };
  User.find(query, callback);
};
