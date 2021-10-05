const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/user');
const config = require('./database');

function passportConfig(passport) {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
    // eslint-disable-next-line no-underscore-dangle
    User.getUserById(jwtPayload.user._id, (err, user) => {
      if (err) {
        return done(err, false);
      }

      if (user) {
        return done(null, user);
      }

      return done(null, false);
    });
  }));
}

module.exports = passportConfig;
