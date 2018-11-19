var express = require('express');
var router = express.Router();
let student = require('../models/student') ;
let News = require('../models/news');
let complaint = require('../models/complaint');
let Request = require('../models/request');


/* GET home page. */

// get admin  sign uppage
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'HOSTEL' });
});





// GET SIGNEDUP STUDENT
router.get('/signedupstudent', function(req, res, next) {
   student.find().then(function(stud) {
     // console.log(tweets);
  res.render('regstudent', { title: 'signedupstudent', students:stud });
   });

});



//post admin 
router.post('/', function(req, res, next) {
  if(req.body.name && req.body.password){
    if(req.body.name ==='ADMIN' &&
     req.body.password ==='PASSWORD'){
 res.render('admin_dashboard',{title:'HOSTEL'});
}else{
  let err = Error('I am very certain you are not an admin');
  err.status = 400;
  next(err);
}
}else{
  let err = Error('please provide your name and password');
  err.status = 400;
  next(err);
}
});



// get student complaint
router.get('/studentcomplaint', function(req, res, next) {
  complaint.find().then(function(complaint) {
    
  res.render('studentcomplaint', { title: 'HOSTEL' ,complaint: complaint });
});
});




 router.get('/admindashboard', function(req, res, next) {
   res.render('admin_dashboard', { title: 'HOSTEL' });
});




router.get('/editnews', function(req, res, next) {
  News.find().then(function(news) {
    // console.log(tweets);
    res.render('edit_news', { title: 'News', news: news });
  });

});



// delete news
router.post('/deletenews',function(req, res, next) {
  console.log(req.body);
  
  News.findByIdAndRemove(req.body.newsId, function() {
    res.redirect('/admin/editnews');
  })
  });


  //get  post news page 
  router.get('/postnews',function(req,res,next){
    res.render('postnews',{title:'update'});
  });
   //post news
  router.post('/postnews',function(req, res, next) {
    if(req.body.header &&
       req.body.news){
     
    let news= {
      heading:req.body.header,
      body:req.body.news
 };console.log(news)
      // News(news).save();
       let dat = new News(news);
  dat.save();
  res.redirect('/admin/editnews');
}else{ 
  let err = new Error('am sorry admin you need to fill something');
err.status=400;
next(err);



}
 });
///edit hostel

router.put('/editnews',function(req, res,next) {
  // Get our REST or form values. These rely on the "name" attributes
  var body = req.body.header;
  var heading = req.body.news;
  

 //find the document by ID
    News.findById(req.body.edit, function (tweets) {
          //update it
          News.update({
              heading :heading,
              body: body
          })
          res.redirect('admin/editnews',{news:news});
         }); 
});




router.get('/hostelrequest', function(req, res, next) {
  Request.find().then(function(request) {
    // console.log(tweets);
    res.render('hostel_request', { title: 'News', Request: request });
  });

});

router.get('/allocatedstudent', function(req, res, next){
  res.render('allocated_student', {title: 'Allocated Student'});
});



router.get('/adminsignup', function(req, res,next){
  res.render('admin_signup', {title: 'Sign up'});
});

router.get('/availablehostel', function (req, res, next) {
  res. render('available_hostel_admin', {title: 'Available Hostel'})
})


 
module.exports = router;
