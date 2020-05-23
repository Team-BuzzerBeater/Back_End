var express = require('express');
var router = express.Router({mergeParams: true});
const utils = require('../module/utils/utils');
const responseMessage = require('../module/utils/responseMessage');
const statusCode = require('../module/utils/statusCode');
require('dotenv').config();

<<<<<<< HEAD
router.use('/printXg', require('./PrintXg'));
=======
router.use('/printXg', require('./printXg'));
router.use('/addXg', require('./addXg'));
>>>>>>> f5a371dd61abcb67355a255b8d177e59e5250538

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('its buzzerbeater');
});

module.exports = router;