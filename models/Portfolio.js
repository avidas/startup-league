var mongoose = require('mongoose');

var portfolioSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    companies: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Portfolio', portfolioSchema);