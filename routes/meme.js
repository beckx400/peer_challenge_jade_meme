var express = require('express');
var memeData = require('../models/images.json');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('memesTemplate', {injectedImages: memeData});
});

module.exports = router;
