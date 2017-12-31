const express = require('express');
const router = express.Router();

const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helper');
const usersController = require('../controllers/user-controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([
    {
      id: 1,
      username: 'samsepi0l',
    },
    {
      id: 2,
      username: 'D0loresH4ze',
    },
  ]);
});

module.exports = router;
