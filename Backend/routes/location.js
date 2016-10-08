(function() {
    'use strict';
    module.exports = function(app) {
        const serverListener = function(lat, lon) {
            const net = require('net');
            const client = new net.Socket();
            client.connect(5000, 'localhost', function() {
                client.write(`${lat},${lon}`);
            });

            let suggestedData = {};
            client.on('data', function(data) {
                suggestedData = JSON.stringify(data.toString());
                client.end();

                return suggestedData;
            });
        };
        app.post('/location', function(req, res) {
            return res.json(serverListener(req.body.lat, req.body.lon));
        });
    };
}());
