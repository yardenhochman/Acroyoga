const express = require('express');
const router = express.Router();
const posesController = require('../controllers/poses-controller');


router.get('/random', function(req, res, next) {
  res.locals.randomPose = posesController.Random()
  res.json({
    message: 'providing randome acroyoga pose',
    data: res.locals.randomPose
  })
});

module.exports = router;
