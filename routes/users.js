const express = require('express');
const userRouter = express.Router();

const usersController = require('../controllers/user-controller');

userRouter.route('/login').post(usersController.login);
userRouter.route('/').get(usersController.findUser);

userRouter.route('/addPose').post(usersController.addPoseToList);
userRouter.route('/removePose/:user_id/:list_name/:pose_id').delete(usersController.removePoseFromList);

userRouter.route('/register').post(usersController.create);
userRouter.route('/logout').get((req, res) => {
  req.logout();
  res.json({ message: 'ok', loggedOut: true });
});
module.exports = userRouter;