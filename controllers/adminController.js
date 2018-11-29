var express = require('express');
var router = express.Router();
let student = require('../models/student') ;
let News = require('../models/news');
let complaint = require('../models/complaint');
let Request = require('../models/request');
let Hostel = require('../models/hostel');




exports.acceptRequest = function (req, res, next) {
    requestID = ""
    Request.findByIdAndUpdate(req.body.requestID,
        {$set:{"status": "ACCEPTED"}}, 
        {new: true}).then((result)=>{
            console.log(result)
            res.redirect("/admin")
          })
}

exports.rejectRequest = function (req, res, next) {
    Request.findByIdAndUpdate(req.body.requestID,
        {$set:{"status": "REJECTED"}}, 
        {new: true}).then((result)=>{
            console.log(result)
            res.redirect("/admin")
          })
}


exports.hostelRequest = function (req, res, next) {
    Request.find({"status":"PENDING"}).then(function(request) {
        console.log(request);
        res.render('hostel_request', { title: 'News', request: request });
      });
};