// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/hostel');
// const db = mongoose.Connection;

// const studentSchema = mongoose.Schema({
//     name:{
//         type:string,
//     },
//     matric:{
//         type:Number
//     },
//     email:{

//     }
// })



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({

    full_name:{type: String, required: [true, 'Full name must be provided']},
    
    email:    { 
    
        type: String,     
    
        Required:  'Email address cannot be left blank.',
        
        validate: [validateEmail, 'Please fill a valid email address'],
             match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        index: {unique: true, dropDups: true}
        
        },
    
      password: { type: String , required: [true,  'Password cannot be left blank']},
    
    
});

let user = mongoose.model('emp', Schema);

app.post('/', (req, res) => {
    new user({
        name : req.body.name,
        password : req.body.password
    }).save((err, doc) => {
        if (err) res.json(err);
        else  res.send('Successful!');
    });
});

module.exports = mongoose.model('user', userSchema);