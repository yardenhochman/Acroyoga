const bcrypt = require('bcryptjs');
class UserDetails {
  constructor(name, password, email, difficulty = '0') {
    this.email = email;
    this.name = name;
    this.pw_digest = this.encrypt(password);
    this.difficulty = difficulty;
    this.lists = [];
  }
  encrypt(pw) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(pw, salt);
  }
}

module.exports = UserDetails;
