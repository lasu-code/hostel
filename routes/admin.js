var express = require('express');
var router = express.Router();



router.get('/admin', function(req, res, next){
    res.render('admin');
  });

router.get('/', function(req, res, next){
    res.render('updates');
});

router.post('/admin', function(req, res, next){
  res.render('adminDashboard');
});







  module.exports = router;
  