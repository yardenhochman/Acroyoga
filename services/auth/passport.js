const passport = require('passport');
const User = require('../../models/users');

module.exports = () => {
  passport.serializeUser((user, done) => done(null, user.username))
  passport.deserializeUser((name, done) => {
    User.findByName(name)
      .then(user => done(null, user)).catch(err => done(err, null))
  })
}