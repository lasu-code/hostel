const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let requestSchema = new Schema({
    blocks: String,
    flats: String,
    names: String,
    departments:String,
    rooms:String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('request', requestSchema);
