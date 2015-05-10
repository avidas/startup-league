var companyController = require('./company');
var portfolioController = require('./portfolio');

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
      else if (!req.user) {
        res.render('home', {
            title: 'Home',
            companies: companies
        });        
      } else {
          portfolioController.getPortfolio(req.user.id, function (err, portfolio) {

            var myCompanies = [];
            portfolio.companies.forEach(function(startupId) {
                companies.forEach(function(comp) {
                    if (String(comp._id) === String(startupId)) {
                        myCompanies.push(comp);
                    }
                });
            });
            res.render('home', {
                title: 'Home',
                portfolio: {
                    companies: myCompanies
                },
                companies: companies
            });
          });        
      }
  });
};
