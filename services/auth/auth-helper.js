const bcrypt = require('bcryptjs');

const comparePass = (userPassword, databasePassword) => bcrypt.compareSync(userPassword, databasePassword);

const loginRedirect = (req, res, next) => req.user ? res.json({message: 'ok',data: req.user}) : next();

const loginRequired = (req, res, next) => !req.user ? res.redirect('/users/login') : next();

module.exports = { comparePass, loginRedirect, loginRequired };
