var Company = require('../models/Company');

exports.getAllCompanies = function(cb) {
  Company.find({}, function (err, companies) {
    if (err) {
      req.flash('errors', err);
      return res.redirect('/');
    }
    cb(err, companies);
  });
};

exports.getCompany = function (companyId, cb) {
  Company.findOne({ _id: companyId }, function (err, company) {
    if (err) {
      req.flash('errors', err);
      return res.redirect('/');
    }
    cb(err, company);
  });
};