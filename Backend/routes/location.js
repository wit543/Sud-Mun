(function() {
    'use strict';
    module.exports = function(app) {
        const serverListener = function(waterLevel) {

        };
        app.post('/location', function(req, res) {
            const net = require('net');
            const client = new net.Socket();
            client.connect(5000, 'localhost', function() {
                client.write(`${req.body.waterLevel}\n`);
            });

            client.on('data', function(data) {
                client.end();
                let array = JSON.parse(data.toString().replace(/(\r\n|\n|\r|\{|\}|\\|\/)/gm, ""));
                return res.json({
                    RD5: array[0],
                    P601: array[1],
                    TPG161: array[2],
                    RD19: array[3]
                });
            });
        });
    };
}());
