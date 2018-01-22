const User = require('../models/users.js');
const jwt = require('jsonwebtoken');
const UserDetails = require('../services/userClass');

const usersController = {};
class TokenSet {
  constructor({ name, difficulty, lists }, id) {
    this.token = jwt.sign({ name, id }, process.env.SECRET, { expiresIn: 60000 });
    this.user = { name, difficulty, lists };
  }
}

usersController.create = async (req, res, next) => {
  console.log('create (poses-controller)');
  const { name, password, email } = req.body;
  try {
    const user = new UserDetails(name, password, email);
    const newUser = await User.create(user);
    console.log(`user ${newUser.name} created`);

    res.json(new TokenSet(user, newUser.id));


    /* req.login(user, err => err && next(err), res.json(new response(user, 'user profile message'))); */
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
usersController.login = async (req, res) => {
  console.log('login (poses-controller)');
  const { email, password } = req.body;
  try {
    const user = await User.findByMail(email);
    console.log(user);
    if (user === null) res.status(405).json({ message: 'Authentication failed. User not found' });
    else if (!User.comparePassword(password, user.password_digest))
      res.status(403).json({ message: 'Authentication failed. Wrong password' });
    else res.json(new TokenSet(user, user.id));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
usersController.findUser = async (req, res) => {
  console.log('findUser (poses-controller)');
  console.log(req.headers)
  let token;
  if (req.headers) token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) return res.json({ success: false, message: 'Failed to authenticate token.' });
      req.userID = decoded.id;
    });
    const user = await User.findByID(req.userID);
    console.log(user);
    res.json(new TokenSet(user, user.id));
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.',
    });
  }
};
module.exports = usersController;
