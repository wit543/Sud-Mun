(function() {
    'use strict';
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const morgan = require('morgan');
    const port = process.env.PORT || 3000;
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, project_id, Authorization, o-Requested-With");
        next();
    });
    app.use(morgan('dev'));

    app.listen(port, function(req, res) {
        console.log('Listening on port 3000...');
    });
    require('./routes/routesManager')(app, express);
})();
