const db = require('../db/config');
const bcrypt = require('bcrypt');

const User = {};


User.findByMail = email =>
  db.oneOrNone(
    `
    SELECT * FROM users
    WHERE email = $1
  `,
    [email]
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
User.comparePassword = (PW, databasePW) => bcrypt.compareSync(PW, databasePW);
module.exports = User;

/* 
 id | name | email | password_digest | difficulty



*/
