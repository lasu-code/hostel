var express = require('express');
var router = express.Router();
let student = require('../models/student') ;
let News = require('../models/news');
let complaint = require('../models/complaint');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LASU HOSTEL MANAGEMENT' });
});


// get a login form
router.get('/login', function(req, res, next) { 
  res.render('login', { title: 'HOSTEL' });
});

// post a login form 
router.post('/login', function(req, res, next) {
  //res.render('login', { title: 'login'});
//  if(req.body.name && req.body.password && req.body.matric){
//  student.authenticate(req.body.name,
//   req.body.password,
//   req.body.matric,
//   function(error,user){
//        //bad login or email or password dosnt match
//       if(error || !user){
//          let err = new Error('wrong password or email')
//          err.status = 401;
//          next(err);
//        }else{
//          //if the user is authenticated then we save the session
//          //that the id drawn from the documents from the mongo document
//          //for that user user_id
//          res.session.userId = user._id;
//          res.redirect('/studentdashboard');
//        }
//      });
//   }else{
//     let err = new Error('password and email are required.');
//   err.status = 401;
//   next(err);
//   }
res.redirect('/studentdashboard');
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'HOSTEL' });
});
router.post('/signup', function(req, res, next) {
//   if(req.body.name && 
//     req.body.email &&
//      req.body.password &&
//       req.body.dept &&
//        req.body.address){
     
//    if(req.body.password !== req.body.confirmpassword){
//     let err= new Error('password does not match.');
//     err.status = 400;
//     next(err);
//  }

//   let userdata = {
//     full_name:req.body.name,
//     email:req.body.email,
//     matric:req.body.matric,
//     password:req.body.password,
//     department:req.body.dept,
//     address:req.body.address

//   };
//  student.create(userdata, function(error, user){
//    if(error){
//      next(error)
//     }
//     else{
//      console.log(userdata)
//      //req.session.userId = user_id;
//      res.redirect('/login')
//    }
//  });
// }else{
//    let err = new Error('all field required.');
//     err.status=400;
//       next(err);
// }
res.redirect('/login')
});
//getting news up date

router.get('/updates', function(req, res, next) {
  News.find().then(function(news) {
    // console.log(tweets);
    res.render('updates', { title: 'News', news: news });
  });

});


// get admin  sign uppage
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'HOSTEL' });
});


//post admin 
router.post('/admin', function(req, res, next) {
  if(req.body.name && req.body.password){
    if(req.body.name ==='ADMIN' &&
     req.body.password ==='ACCESSCONTROL'){
 res.render('admin_dashboard',{title:'HOSTEL'});
}else{
  let err = Error('I am very certain you are not an admin');
  err.status = 400;
  next(err);
};
}else{
  let err = Error('please provide your name and password');
  err.status = 400;
  next(err);
}
});



// get student complaint
router.get('/studentcomplain', function(req, res, next) {
  complaint.find().then(function(complaint) {
    
  res.render('studentcomplaint', { title: 'HOSTEL' ,complaint: complaint });
});
});




router.get('/studentdashboard', function(req, res, next) {
  res.render('student_dashboard', { title: 'HOSTEL' });
  
});

 router.get('/admindashboard', function(req, res, next) {
   res.render('admin_dashboard', { title: 'HOSTEL' });
});



// delete news
router.post('/deletenews',function(req, res, next) {
  console.log(req.body);
  
  db.findByIdAndRemove(req.body.tweetId, function() {
    res.redirect('/tweet');
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
  res.redirect('/updates');
}else{ 
  let err = new Error('am sorry admin you need to fill something');
err.status=400;
next(err);



}
 });

 router.get('/hostelrequest', function(req, res, next){
  res.render('hostel_request', {title: 'Hostel Request'});
});

router.get('/allocatedstudent', function(req, res, next){
  res.render('allocated_student', {title: 'Allocated Student'});
});

router.get('/availablehostel', function(req, res, next){
  res.render('available_hostel', {title: 'Update Available Hostel'});
});

router.get('/adminsignup', function(req, res,next){
  res.render('admin_signup', {title: 'Sign up'});
});



//route where student post news
router.get('/postcomplain', function(req, res, next){
  res.render('complain', {title: 'Student Complain'});
});

router.post('/postcomplain', function(req, res, next){

  if(req.body.postcomplain){
  
 let complain= {
   body:req.body.postcomplain
};console.log(complain)
   // News(news).save();
    let comp = new complaint(complain);
comp.save();
res.redirect('/studentdashboard');
}else{ 
let err = new Error('am sorry admin you need to fill something');
err.status=400;
next(err);



}
 
});


 
module.exports = router;
