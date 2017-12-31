const express = require('express');
const router = express.Router();
const posesController = require('../controllers/poses-controller');

router.get('/random', posesController.Random);

/* router.get('/random', function(req, res, next) {
  const randomPose = posesController.Random();
  //console.log(randomPose);
  res.json({
    message: 'providing random acroyoga pose',
    data: randomPose
  });
}); */

module.exports = router;

//
