const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const User = require('../../models/users');
const authHelpers = require('./auth-helper');

const options = {};

init();

passport.use(
  new LocalStrategy(options, async (name, pw, done) => {
    try {
      const user = await User.findByName(name)
      console.log('initial:', user);
      if (!user || !authHelpers.comparePass(pw, user.password_digest)) return done(null, false);
      console.log('got em:', user);
      return done(null, user);
    }
    catch (error) {
      console.log(error);
      return done(error);
    };
  }),
);
module.exports = passport;
