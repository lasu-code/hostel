var express = require('express');
var router = express.Router();
let admin = require('../models/admin');

router.get('/admin/complain', function(req, res, next) {
    res.render('complain', { title: 'HOSTEL' });
  });

// router.get('/studentcomplain', function(req, res, next) {
//    res.render('student_complain', { title: 'HOSTEL' });
//   });

// router.get('/studentcomplain', function(req, res, next) {
//     res.render('student_complain', { title: 'HOSTEL' });
//   });




  module.exports = router;