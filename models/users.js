const db = require('../db/config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

const User = {
  createToken: user => {
    console.log('create token')
    const { name, id } = user;

    return {
      token: jwt.sign({ name, id }, process.env.SECRET, { expiresIn: 60000 }),
      user
    };
  },

  create: async user => {
    const newUser = Object.assign(
      {
        lists: [],
        difficulty: 0,
        pw_digest: User.encrypt(user.password),
      },
      user,
    );
    delete user.password;
    console.log(newUser)
    return await db.one(
      `
      INSERT INTO users
      (name, email, password_digest,difficulty)
      VALUES ($/name/, $/email/, $/pw_digest/,$/difficulty/)
      RETURNING *
      `,
      newUser,
    );
  },

  findByMail: email => {
    return db.oneOrNone(
      `
    SELECT * FROM users
    WHERE email = $1
  `,
      [email],
    );
  },

  encrypt: pw => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(pw, salt);
  },

  findByID: id => {
    return db.oneOrNone(
      `
    SELECT * FROM users
    WHERE id = $1
  `,
      [id],
    );
  },

  addPoseToList: pose => {
    pose.list_name = pose.list_name || 'Favorites';

    return db.one(
      `
      INSERT INTO user2pose
      (user_id, pose_id, list_name)
      VALUES ($/user_id/, $/pose_id/, $/list_name/)
      RETURNING *
      `,
      pose,
    );
  },

  removePoseFromList: pose => {
    return db.none(
      `
      DELETE FROM user2pose
      WHERE 
      user_id=$/user_id/ AND
      pose_id=$/pose_id/ AND 
      list_name= $/list_name/
      `,
      pose,
    );
  },

  getPoseList: async userID => {
    console.log('poseList DB query for userId', userID);
    const poses = await db.query(
      `
    SELECT * FROM user2pose
    WHERE user_id = $1
    `,
      [userID],
    );
    return _(poses)
      .groupBy('list_name')
      .mapValues(list => {
        return _.map(list, 'pose_id').map(Number);
      })
      .value();
  },

  comparePassword: (PW, databasePW) => bcrypt.compareSync(PW, databasePW),
};

module.exports = User;
