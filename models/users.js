const db = require('../db/config');
const bcrypt = require('bcrypt');

const User = {};

User.findByMail = email =>
  db.oneOrNone(
    `
    SELECT * FROM users
    WHERE email = $1
  `,
    [email],
  );
User.findByID = id =>
  db.oneOrNone(
    `
    SELECT * FROM users
    WHERE id = $1
  `,
    [id],
  );
User.create = user =>
  db.one(
    `
  INSERT INTO users
  (name, email, password_digest,difficulty)
  VALUES ($/name/, $/email/, $/pw_digest/,$/difficulty/)
  RETURNING *
  `,
    user,
  );
User.addPose = (pose, user, list) => {
  console.log(user, pose, list);
  db.one(
    `
  INSERT INTO user2pose
  (user_id, pose_id, list_name)
  VALUES ($1, $2, $3)
  RETURNING *
  `,
    [user, pose, list],
  );
};
User.removePose = (pose, user, list) => {
  console.log(user, pose, list);
  db.one(
    `
  DELETE FROM user2pose
  WHERE 
  user_id=$1 AND
  pose_id=$2 AND 
  list_name=$3
  `,
    [user, pose, list],
  );
};
User.poseList = userID => {
  console.log('poseList DB query for userId', userID);
  return db.query(
    `
  SELECT * FROM user2pose
  WHERE user_id = $1
  `,
    [userID],
  );
};
User.comparePassword = (PW, databasePW) => bcrypt.compareSync(PW, databasePW);
module.exports = User;

/* 
 id | name | email | password_digest | difficulty



*/
