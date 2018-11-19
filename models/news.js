const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let NewsSchema = new Schema({
    heading: String,
    body: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('News', NewsSchema);
