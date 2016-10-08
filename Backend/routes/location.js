(function () {
    'use strict';
    module.exports = function(app, net) {
        app.post('/location', function(req, res) {
            const client = net.connect({port: 5000});
            let suggestedData = {};
            client.on('data', function(data) {
                suggestedData = data.toString();
            });
            client.on('end');

            return res.json(JSON.stringify(suggestedData));
        });
    };
}());
