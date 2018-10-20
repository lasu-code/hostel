var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req, res, next){
  res.render('login');
});

router.get('/signup',function(req, res, next){
  res.render('signup');
});

router.get('/admin',function(req, res, next){
  res.render('admin');
});
module.exports = router;
