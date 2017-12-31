const bcrypt = require('bcryptjs');
const User = require('../models/users.js');

const usersController = {};

usersController.create = (req, res) => {
  const { user } = req.body;
  console.log('create (poses-controller):', user);
  const salt = bcrypt.genSaltSync();
  const pw_digest = bcrypt.hashSync(user.pw_digest, salt);
  const { name, email, difficulty } = user;
  User.create({ name, email, pw_digest, difficulty })
    .then(user => {
      req.login(user, (err) => {
        if (err) return next(err)
        res.json({ user: req.user, data: 'user profile message' })
      });
    }).catch(err => {
      console.log(err)
      res.status(500).json({ error: err })
    });
}

module.exports = usersController;
