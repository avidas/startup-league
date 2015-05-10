var mongoose = require('mongoose');

var portfolioSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Portfolio'
    },
    companies: [mongoose.Schema.ObjectId]
});

module.exports = mongoose.model('Portfolio', portfolioSchema);