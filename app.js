const express = require('express');
const path = require('path');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const passport = require('passport');

const index = require('./routes/index');
const userRouter = require('./routes/users');

const app = express();

// view engine setup
app.use(cors());

/* app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); */

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./client/build'));
app.use((req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET, (err, decode) => {
      if (err) {
        req.user = undefined;
        return res.json({ message: 'Please login' });
      }
      req.user = decode;
      console.log('go to next level');
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));

app.use('/index', index);
app.use('/users', userRouter);

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
