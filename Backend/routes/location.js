(function () {
    'use strict';
    module.exports = function(app, express) {
        app.get('/location', function(req, res) {
            return res.json({message: 'Hello World'});
        });
    };
}());
