var express = require('express');
var router = express.Router({mergeParams: true});
const utils = require('../module/utils/utils');
const responseMessage = require('../module/utils/responseMessage');
const statusCode = require('../module/utils/statusCode');
require('dotenv').config();

router.use('/printXg', require('./PrintXg'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;