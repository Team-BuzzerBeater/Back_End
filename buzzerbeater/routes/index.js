var express = require('express');
var router = express.Router();

// 팀 목록 출력
router.get('/team', async(req, res) => {

});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
