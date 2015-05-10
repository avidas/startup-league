var companyController = require('./company');

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  companyController.getAllCompanies(function (err, companies) {
      if (err) {
        req.flash('errors', err);
        return res.redirect('/');
      }
      res.render('home', {
        title: 'Home',
        companies: companies
      });
  });
};
