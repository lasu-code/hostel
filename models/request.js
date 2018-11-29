const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let requestSchema = new Schema({
    // FIXME: should uses hostel schema ideally an dnot individual details as specified
    // hostel: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'hostel'
    // },
    block: String,
    flat: String,
    room: String,
    name: String,
    department:String,
    status: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('request', requestSchema);
