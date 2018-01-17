const bcrypt = require('bcryptjs');
class UserDetails {
  constructor(password, email, difficulty = '0') {
    this.name = `TBA_name ${Math.random(100)}`;
    this.email = email;
    this.username = email;
    this.pw_digest = this.encrypt(password);
    this.difficulty = difficulty;
    this.tokens = [];
    this.lists = [];
  }
  encrypt(pw) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(pw, salt);
  }
  async generateToken() {
    const user = this;
    const access = 'auth';
    const token = jwt.sign({ _id: user._id.toHexString(), access }, 'abc123').toString();

    user.tokens.push({ access, token });
    await user.save();
    return token;
  }
}

module.exports = UserDetails;
