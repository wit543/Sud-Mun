(function () {
    'use strict';
    module.exports = function(app) {
        app.get('/location', function(req, res) {
            return res.json({message: 'Hello World'});
        });

        app.post('/location', function(req, res) {
            return res.json({
                lat: req.body.lat,
                lon: req.body.lon
            });
        });
    };
}());
