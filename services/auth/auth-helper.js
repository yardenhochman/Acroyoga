const bcrypt = require('bcryptjs');

const successObject = { message: 'ok', data: req.user };

const comparePass = (userpw, dbpw) => bcrypt.compareSync(userpw, dbpw);
const loginRedirect = (req, res, next) => req.user?res.json(successObject):next();
const loginRequired = (req, res, next) => !req.user && res.redirect('/auth/login');

module.exports = { comparePass, loginRedirect, loginRequired };