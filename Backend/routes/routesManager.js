(function() {
    'use strict';
    module.exports = function(app, express) {
        const apiRoutes = express.Router();
        const net = require('net');

        require('./location')(apiRoutes, net);

        require('./flood')(apiRoutes);

        require('./drought')(apiRoutes);

        app.use('/static', express.static('public'));

        app.use('/api', apiRoutes);
    };
}());
