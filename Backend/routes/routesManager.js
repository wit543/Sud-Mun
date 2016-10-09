(function() {
    'use strict';
    const net = require('net');
    const config = require('../config/database');
    const mongoose = require('mongoose');
    module.exports = function(app, express) {
        const apiRoutes = express.Router();
        mongoose.connect(config.database);
        require('./location')(apiRoutes, net);

        require('./flood')(apiRoutes);

        require('./rice')(apiRoutes, mongoose);

        app.use('/static', express.static('public'));

        app.use('/api', apiRoutes);
    };
}());
