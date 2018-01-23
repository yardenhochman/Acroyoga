const User = require('../models/users.js');
const jwt = require('jsonwebtoken');
const UserDetails = require('../services/userClass');

const usersController = {};
class TokenSet {
  constructor({ name, lists, difficulty }, id) {
    this.token = jwt.sign({ name, id }, process.env.SECRET, { expiresIn: 60000 });
    this.user = { name, difficulty, lists, id };
  }
}
const sortList = list => {
  let poseList = {};
  list.map(line => {
    console.log(line.list_name);
    if (!poseList[line.list_name]) return (poseList[line.list_name] = [line.pose_id]);
    else return poseList[line.list_name].push(line.pose_id);
  });
  return poseList;
};
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
    else {
      console.log('found & verified User (login)');
      const newList = await User.poseList(user.id);
      const sorted = sortList(newList);
      user.lists = sorted;
      console.log('user', user);
      res.json(new TokenSet(user, user.id));
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
usersController.findUser = async (req, res) => {
  console.log('findUser (poses-controller)');
  let token;
  if (req.headers) token = req.headers.authorization;
  if (token !== 'null') {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) return res.json({ success: false, message: 'Failed to authenticate token.' });
      req.userID = decoded.id;
      console.log('found & verified User (token load)');
    });
    const user = await User.findByID(req.userID);
    const newList = await User.poseList(user.id);
    const sorted = sortList(newList);
    user.lists = sorted;
    console.log(user);
    res.json(new TokenSet(user, user.id));
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.',
    });
  }
};
usersController.addPose = async (req, res) => {
  console.log('addPose (poses-controller)');
  const { pose_id, user_id, list_name = 'Favorites' } = req.body;
  try {
    await User.addPose(pose_id, user_id, list_name);
    const newList = await User.poseList(user_id);
    const sorted = sortList(newList);
    console.log(newList);
    console.log(sorted);
    res.status(200).send({
      success: true,
      message: 'pose Added.',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
usersController.removePose = async (req, res) => {
  console.log('removePose (poses-controller)');
  const { pose_id, user_id, list_name = 'Favorites' } = req.body;
  try {
    await User.removePose(pose_id, user_id, list_name);
    const newList = await User.poseList(user_id);
    const sorted = sortList(newList);
    console.log(newList);
    console.log(sorted);
    res.status(200).send({
      success: true,
      message: 'pose Added.',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
module.exports = usersController;
