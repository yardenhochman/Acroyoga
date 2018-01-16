const db = require('../db/config');

const User = {};

User.findByName = name => db.oneOrNone(
    `
    SELECT * FROM users
    WHERE name = $1
  `, [name],
  );

User.create = user => db.one(
  `
  INSERT INTO users
  (name, email, password_digest,difficulty)
  VALUES ($1, $2, $3, $4)
  RETURNING *
  `,
  [user.name, user.email, user.pw_digest, user.difficulty],
);

module.exports = User;

/* 
 id | name | email | password_digest | difficulty



*/
