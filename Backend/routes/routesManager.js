(function() {
    'use strict';
    module.exports = function(app, express) {
        const apiRoutes = express.Router();

        require('./location')(apiRoutes, express);

        app.use('/api', apiRoutes);
    };
}());
