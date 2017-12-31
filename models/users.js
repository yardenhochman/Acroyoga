const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(
    `
    SELECT * FROM users
    WHERE username = $1
  `,
    [userName],
  );
};

User.create = user => {
  return db.one(
    `
    INSERT INTO users
    (name, email, password_digest,difficulty)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `,
    [user.name, user.email, user.password_digest, user.difficulty||'0'],
  );
};

module.exports = User;

/* 
 id | name | email | password_digest | difficulty



*/
