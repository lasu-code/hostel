const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let adminSchema = new Schema({

    full_name: {
        type: String,
        required: [true, 'Full name must be provided']
    },

    email: {

        type: String,

        Required: 'Email address cannot be left blank.',

        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        index: {
            unique: true,
            dropDups: true
        }
    },

    createdDate: {
        type: Date,
        default: Date.now
    },

    password: {
        type: String,
        required: [true, 'Password cannot be left blank']
    },

});

let admin = mongoose.model('admin', adminSchema)
module.exports = admin