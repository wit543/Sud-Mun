(function() {
    'use strict';
    module.exports = function(app) {
        app.get('/flood/:year', function(req, res) {
            res.redirect(`/static/floods/flood_${req.params.year}_geo_link.kml`);
        });
    };
}());
