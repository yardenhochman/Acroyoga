const bcrypt = require('bcryptjs');



const comparePass = (userpw, dbpw) => bcrypt.compareSync(userpw, dbpw);
const loginRedirect = (req, res, next) => req.user?res.json({ message: 'ok', data: req.user }):next();
const loginRequired = (req, res, next) => !req.user && res.redirect('/users/login');

module.exports = { comparePass, loginRedirect, loginRequired };