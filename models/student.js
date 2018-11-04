const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let bcrypt = require('bcrypt');

let loginSchema = new Schema({

    full_name:{type:String, required: [true, 'This field cannot be empty']},

    matric:{type: String, required: [true, 'Matric number must be provided']},
    
    password: { type: String  , required: [true,  'Password cannot be left blank'] },
    address:{ type: String , required: [true,  'Address cannot be left blank']},
    department: { type: String , required: [true,  'Department must be provided']},

    email: {

        type: String,

        Required: 'Email address cannot be left blank.',

        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        // index: {
        //     unique: true,
        //     dropDups: true
        // }
    },

});
loginSchema.pre('save',function(next){
    let user = this;
    bcrypt.hash(user.password,10,function(err,hash){
        if(err){
            next(err);

        }user.password = hash;
        next();
    })
});
let user = mongoose.model('student', loginSchema);
module.exports = user