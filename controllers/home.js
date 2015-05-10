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
            if (portfolio) {
                if (portfolio.companies) {
                    portfolio.companies.forEach(function(startupId) {
                        companies.forEach(function(comp) {
                            if (String(comp._id) === String(startupId)) {
                                myCompanies.push(comp);
                            }
                        });
                    });                  
                }
            }

            if (req.user.profile.name && req.user.profile.points) {
                req.flash('success', { msg: 'Hey ' + req.user.profile.name + '! You have ' + req.user.profile.points + ' points. Choose wisely!' });
            }
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
