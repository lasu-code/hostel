var express = require('express');
var router = express.Router();
let student = require('../models/student') ;
let News = require('../models/news');
let complaint = require('../models/complaint');



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'HOSTEL MANAGEMENT' });
  });
  
  
  //getting news up date
  
  router.get('/updates', function(req, res, next) {
    News.find().then(function(news) {
      // console.log(tweets);
      res.render('updates', { title: 'Update', news: news });
    });
  
  });

  

 
module.exports = router;
