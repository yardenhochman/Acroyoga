const User = require('../models/users.js');
const sjw = require('jsonwebtoken');
const _ = require('lodash');
const UserDetails = require('../services/userClass');
const usersController = {};


class response {
  constructor(user, message) {
    this.user = user;
    this.message = message;
  }
}

usersController.create = async (req, res, next) => {
  console.log('create (poses-controller)');
  const { name, password, email } = req.body;
  try {
    const user = new UserDetails(name, password, email);
    await User.create(user);
    console.log(`user ${user.email} created`);
    res.send(user);
    /* req.login(user, err => err && next(err), res.json(new response(user, 'user profile message'))); */
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = usersController;
