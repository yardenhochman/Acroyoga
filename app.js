const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
require('dotenv').config();
const passport = require('passport');
const cookieSession = require('cookie-session');

const app = express();

// view engine setup
app.use(cors());

/* app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); */

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./client/build'));
//app.use(session({ secret: 'cats' }));
/* app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.SECRET_KEY],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  }),
); */
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));

const index = require('./routes/index');
app.use('/index', index);

const users = require('./routes/users');
app.use('/users', users);

// catch 404 and forward to error handler
app.get('*', (req, res) => res.send('404error'));

/*
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); */

module.exports = app;
