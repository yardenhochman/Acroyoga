const bcrypt = require('bcryptjs');
class UserDetails {
  constructor(name, password, email, lists = [], difficulty = '0') {
    this.name = name;
    this.email = email;
    this.pw_digest = this.encrypt(password);
    this.difficulty = difficulty;
    this.lists = lists;
  }
  encrypt(pw) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(pw, salt);
  }
}

module.exports = UserDetails;
