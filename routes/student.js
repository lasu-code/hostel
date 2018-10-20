var express = require('express');
var router = express.Router();

router.get('/student', function(req, res, next){
    res.render('student');
  });



  module.exports = router;