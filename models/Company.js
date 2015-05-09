var mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
    name: { type: String, default: ''},
    image: { type: String, default: ''},
    raised: { type: String, default: ''},
    series: { type: String, default: ''},
    points: Number
});

module.exports = mongoose.model('Company', companySchema);