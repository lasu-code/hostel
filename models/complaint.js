const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ComplaintSchema = new Schema({
    body: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
