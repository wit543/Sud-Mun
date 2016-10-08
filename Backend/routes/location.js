(function () {
    'use strict';
    module.exports = function(app, express) {
        app.get('/location', function(req, res) {
            return res.json({message: 'Hello World'});
        });

        app.post('/location', function(req, res){
            const lat = req.body.lat;
            const lon = req.body.lon;
            console.log(lat,lon);
        });
    };
}());
