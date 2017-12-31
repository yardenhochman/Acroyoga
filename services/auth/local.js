const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const User = require('../../models/users');
const authHelpers = require('./auth-helper');

const options = {};

init();

passport.use(
  new LocalStrategy(options, (name, pw, done) => {
    User.findByName(name)
      .then(user => {
        console.log('initial:', user);
        if (!user || !authHelpers.comparePass(pw, user.password_digest)) return done(null, false);
        console.log('got em:', user);
        return done(null, user);
      })
      .catch(err => {
        console.log(err);
        return done(err);
      });
  }),
);
module.exports = passport;
