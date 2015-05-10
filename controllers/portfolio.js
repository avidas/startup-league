var Portfolio = require('../models/Portfolio');

exports.getPortfolio = function(userId, cb) {
  Portfolio.findOne({userId: userId}, function (err, portfolio) {
    if (err) {
      req.flash('errors', err);
      return res.redirect('/');
    }
    cb(err, portfolio);
  });
};