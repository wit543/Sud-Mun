(function() {
    'use strict';
    module.exports = function(app, express) {
        const apiRoutes = express.Router();

        require('./location')(apiRoutes);

        require('./flood')(apiRoutes);

        require('./drought')(apiRoutes);

        app.use('/api', apiRoutes);
    };
}());
