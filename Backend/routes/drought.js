(function() {
    'use strict';
    module.exports = function(app, net) {
        app.get('/drought', function(req, res) {
            return res.json({
                jan: 170,
                feb: 1780,
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
