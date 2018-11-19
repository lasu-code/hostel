var express = require('express');
var router = express.Router();
let student = require('../models/student') ;
let News = require('../models/news');
let complaint = require('../models/complaint');
let Request = require('../models/request');


/* GET sign up form. */

router.get('/', function(req, res, next) {
  res.render('signup', { title: 'HOSTEL' });
});
// get a login form
router.get('/login', function(req, res, next) { 
  res.render('login', { title: 'HOSTEL' });
});


router.get('/studentdashboard', function(req, res, next) {
  res.render('student_dashboard', { title: 'HOSTEL' });
  
});


router.post('/choosehostel', function(req, res, next) {
  if(req.body.name &&
    req.body.department &&
    req.body.block &&
    req.body.flat &&
    req.body.room
    ){
  
    let requests= {
      blocks:req.body.block,
      flats:req.body.flat,
     departments: req.body.department,
    rooms:req.body.room ,
   names: req.body.name
   };console.log(requests)
      // News(news).save();
       let requ = new Request(requests);
   requ.save();
 res.redirect('/student/availablehostel');
   }else{ 
   let err = new Error('fill the required field');
   err.status=400;
   next(err);
   }
   });

//select hostel
router.get('/selecthostel', function(req, res, next) {
  res.render('select_hostel', { title: 'HOSTEL' });
  
});



//select h
router.get('/selecthostel', function(req, res, next) {
  res.render('select_hostel', { title: 'HOSTEL' });
  
});




// post a login form 
router.post('/login', function(req, res, next) {
  //res.render('login', { title: 'login'});
//  if(req.body.name && req.body.password && req.body.matric){
//  student.authenticate(req.body.name,
//   req.body.password,
//   req.body.matric,
//        //bad login or email or password dosnt match
//       if(error || !user){
//          let err = new Error('wrong password or email')
//          err.status = 401;
//          next(err);
//        }else{
  //          //if the user is authenticated then we save the session
  //          //that the id drawn from the documents from the mongo document
              //   function(error,user){
//          //for that user user_id
//          res.session.userId = user._id;
//          res.redirect('/student/studentdashboard');
//        }
//      });
//   }else{
//     let err = new Error('password and email are required.');
//   err.status = 401;
//   next(err);
//   }
res.redirect('/student/studentdashboard');
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
//      res.redirect('/student/login')
//    }
//  });
// }else{
//    let err = new Error('all field required.');
//     err.status=400;
//       next(err);
// }
res.redirect('/student/studentdashboard')
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
res.redirect('/student/studentdashboard');
}else{ 
let err = new Error('am sorry admin you need to fill something');
err.status=400;
next(err);



}
 
});



router.get('/availablehostel', function(req, res, next){
  res.render('available_hostel', {title: 'Available Hostel'});
});


module.exports = router;
