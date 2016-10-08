(function() {
    'use strict';
    module.exports = function(app) {
        app.get('/drought/:year', function(req, res) {
            res.redirect(`/static/droughts/drought_${req.params.year}_geo_link.kml`);
        });
    };
}());
