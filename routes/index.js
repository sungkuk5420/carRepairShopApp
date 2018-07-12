var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('event', { title: 'Express' });
});

router.get('/template', function(req, res, next) {
  res.render('template', { title: 'Express' });
});

/* GET Motor service center page. */
router.get('/motor', function(req, res, next) {
  res.render('motorSC', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Express' });
});

module.exports = router;
