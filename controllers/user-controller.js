const User = require('../models/users.js');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const usersController = {};

function sendError(res, message) {
  res.status(403).send({
    success: false,
    message,
  });
}

function sendSuccess(res, message) {
  res.status({
    success: true,
    message,
  });
}

async function tryRequest(res, request) {
  try {
    await request();
  } catch (err) {
    res.status(500).send({ err });
  }
}

usersController.create = async (req, res, next) => {
  tryRequest(res, async () => {
    const newUser = await User.create(req.body);
    console.log('got back from User Creation')
    res.json(User.createToken(newUser));
  });
};

usersController.login = async (req, res) => {
  const { email, password } = req.body;
  tryRequest(res, async () => {
    const user = await User.findByMail(email);

    if (!user) {
      return sendError(res, 'Authentication failed. User not found');
    }

    if (!User.comparePassword(password, user.password_digest)) {
      return sendError(res, 'Authentication failed. Wrong password');
    }

    res.json(User.createToken(user));
  });
};

function verifyUser(req, cb) {
  const token = req.headers && req.headers.authorization;

  if (!token) {
    throw 'No token provided.';
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      throw 'Failed to authenticate token.';
    }

    cb(decoded.id);
  });
}

usersController.findUser = async (req, res) => {
  tryRequest(res, async () => {
    verifyUser(req, async id => {
      const user = await User.findByID(id);
      if (!user) {
        sendError(res, 'No such user.');
        return;
      }

      user.lists = await User.getPoseList(user.id);
      delete user.password_digest;
      res.json(user);
    });
  });
};

usersController.addPoseToList = async (req, res) => {
  tryRequest(res, async () => {
    verifyUser(req, async id => {
      if (id !== req.user_id) {
        sendError(res, "userId doesn't match");
      }

      await User.addPoseToList(req.body);

      sendSuccess(res, 'Pose Added');
    });
  });
};

usersController.removePoseFromList = async (req, res) => {
  tryRequest(res, async () => {
    verifyUser(req, async id => {
      if (id !== req.user_id) {
        sendError(res, "userId doesn't match");
      }

      await User.removePoseFromList(req.params);

      sendSuccess(res, 'Pose Removed');
    });
  });
};

module.exports = usersController;
