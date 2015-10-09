var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.ejs');
});

router.get('/live', function(req, res) {
  res.render('live.ejs');
});

module.exports = router;
