var express = require('express');
var router = express.Router();
let student = require('../models/student') ;
let News = require('../models/news');
let complaint = require('../models/complaint');
let Request = require('../models/request');
let Hostel = require('../models/hostel');




exports.requestHostel = function (req, res, next) {
    let newRequest = new Request;
    console.log(req.body);
    newRequest.name = req.body.name;
    newRequest.block = req.body.block;
    newRequest.flat = req.body.flat;
    newRequest.room = req.body.room;
    newRequest.department = req.body.department;
    newRequest.status = "PENDING"

    newRequest.save()
        .then((data) => {
            console.log("Data save dsuccesfully")
            res.redirect('/');
        })
        .catch((err) => {
            console.log("Error occured", err);
            res.send(`${err.name}: ${err._message}`);
        });
}