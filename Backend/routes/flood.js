(function() {
    'use strict';
    module.exports = function(app) {
        app.get('/flood/months', function(req, res) {
            return res.json({
                jan: 100,
                feb: 150,
                mar: 80,
                apr: 95,
                may: 105,
                jun: 60,
                july: 55,
                aug: 84,
                sep: 99,
                oct: 107,
                nov: 46,
                dec: 30
            });
        });
    };
}());
