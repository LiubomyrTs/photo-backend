/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

const USER_ROLES = {
  CUSTOMER: 'CUSTOMER',
  ADMIN: 'ADMIN',
};

const router = express.Router();
// Register
router.post('/register', (req, res) => {
  User.getUserByUsername(req.body.username, (err, user) => {
    if (err) throw err;
    if (!user) {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: USER_ROLES.CUSTOMER,
      });

      User.addUser(newUser, (e) => {
        if (e) {
          res.json({ success: false, msg: 'Failed to register user' });
        } else {
          res.json({ success: true, msg: 'User registered' });
        }
      });
    } else {
      res.status(400).json({ sucess: false, msg: 'User already exists' });
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res) => {
  const { username, password } = req.body;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.status(400).json({ success: false, msg: 'User not found' });
      return;
    }

    User.comparePassword(password, user.password, (error, isMatch) => {
      if (error) throw error;
      if (isMatch) {
        const token = jwt.sign({ user }, config.secret, {
          expiresIn: 604800,
        });

        res.json({
          success: true,
          token: `JWT ${token}`,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            role: user.role,
          },
        });
      } else {
        res.status(400).json({ success: false, msg: 'Wrong password' });
      }
    });
  });
});

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.getAll((err, users) => {
    if (err) throw err;
    users.forEach((user) => {
      user.password = undefined;
    });
    res.json(users);
  });
});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { user } = req;
  user.password = undefined;
  res.json({ user });
});

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { id } = req.params;
  User.getUserById(id, (err, user) => {
    if (err) throw err;
    user.password = undefined;
    res.json(user);
  });
});

module.exports = router;
