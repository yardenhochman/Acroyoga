const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const posesRouter = require('./routes/posesRouter');
const userRouter = require('./routes/users');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./client/build'));

app.use((req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET, (err, decode) => {
      if (err) {
        req.user = undefined;
        return res.json({ message: 'Please login' });
      }
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));

app.use('/poses', posesRouter);
app.use('/user', userRouter);

app.get('*', (req, res) => res.send('404error'));

module.exports = app;
