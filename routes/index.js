var express = require('express');
var router = express.Router();
let user = require('../models/student') ;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LASU HOSTEL MANAGEMENT' });
});

router.get('/login', function(req, res, next) { 
  res.render('login', { title: 'HOSTEL' });
});
router.post('/login', function(req, res, next) { 
  if(body.req.email && req.body.password){
    user.authenticate(req.body.email,req.body.password,function(error,user){
      if(error || !user){
        let err = new Error('wrong password or email')
        err.status=401;
        next(err);
      }else{
        res.session.userId = user._id;
        res.render('studentdashboard', { title: 'HOSTEL' });
      }
    });
  }else{
    let err = new Error('password and email are required');
    err.status = 401;
    next(err);
  }
  
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'HOSTEL' });
});
router.post('/signup', function(req, res, next) {
  if(req.body.name && 
    req.body.email &&
     req.body.password &&
      req.body.dept &&
       req.body.address){
     
  // if(req.body.password !== req.body.comfirmpassword)
  // {
  //   let err= new Error('password does not match')
  // }

  let userdata = {
    full_name:req.body.name,
    email:req.body.email,
    matric:req.body.matric,
    password:req.body.password,
    department:req.body.dept,
    address:req.body.address

  };
 user.create(userdata, function(error, user){
   if(error){
     next(error)
    }
    else{
     console.log(userdata)
     res.redirect('/login')
   }
 });
}else{
  // let err = new Error('all field required.');
// error.status=400;
res.send('all field required');
}
});

router.get('/updates', function(req, res, next) {
  res.render('updates', { title: 'HOSTEL' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'HOSTEL' });
});

router.get('/studentdashboard', function(req, res, next) {
  res.render('student_dashboard', { title: 'HOSTEL' });
  
});

router.get('/admindashboard', function(req, res, next) {
  res.render('admin_dashboard', { title: 'HOSTEL' });
});


module.exports = router;
