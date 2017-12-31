const express = require('express');
const router = express.Router();
const posesController = require('../controllers/poses-controller');

router.get('/random', posesController.Random);

module.exports = router;

//
