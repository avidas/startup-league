/**
 * GET /
 * league.
 */
exports.index = function(req, res) {
    res.render('leagues/index', {
      title: 'Leagues'
    });
};

exports.new = function(req, res) {
    res.render('leagues/new', {
      title: 'New league'
    });
};
