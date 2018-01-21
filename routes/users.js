const express = require('express');
const userRouter = express.Router();

const passport = require('../services/auth/local');
//const authHelpers = require('../services/auth/auth-helper');
const usersController = require('../controllers/user-controller');

/* GET users listing. */
userRouter.route('/login').post(usersController.login);
userRouter.route('/token').get(usersController.findUser);
//.get(authHelpers.loginRedirect, (req, res) => res.render('auth/login'))
/*.post(
            passport.authenticate('local'),
            (req, res, next) => res.json({ auth: true, message: 'ok', user: req.user }),
            (err, req, res, next) => res.json({ auth: false, message: 'Not authed' }),
          );*/

userRouter.route('/register').post(usersController.create);
userRouter.route('/logout').get((req, res) => {
  req.logout();
  res.json({ message: 'ok', loggedOut: true });
});
module.exports = userRouter;