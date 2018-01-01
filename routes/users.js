const express = require('express');
const router = express.Router();

const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helper');
const usersController = require('../controllers/user-controller');

/* GET users listing. */
router.get('/login', authHelpers.loginRedirect, (req, res) => res.render('auth/login'));
router.get('/register', authHelpers.loginRedirect, (req, res) => res.render('auth/register'));
router.post('/register', userController.create);
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'ok', loggedOut: true });
});
router.post('/login', passport.authenticate('local'),
  (req, res, next) => res.json({ auth: true, message: 'ok', user: req.user }),
  (err, req, res, next) => res.json({ auth: false, message: 'Not authed' })
);

module.exports = router;
