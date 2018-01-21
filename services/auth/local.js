const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const User = require('../../models/users');
const authHelpers = require('./auth-helper');

const options = {};

init();

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    User.findByEmail(username)
      .then(user => {
        console.log('initial:', user);
        if (!user) {
          return done(null, false);
        }
        if (!authHelpers.comparePass(password, user.password_digest)) {
          return done(null, false);
        } else {
          console.log('got em:', user);
          return done(null, user);
        }
      })
      .catch(err => {
        console.log(err);
        return done(err);
      });
  }),
);

module.exports = passport;
