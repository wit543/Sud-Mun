(function() {
    'use strict';
    const Rice = require('./../models/rice');
    module.exports = function(app, mongoose) {
        app.get('/rice/:name', function(req, res) {
            Rice.findOne({
                'varity': req.params.name
            }, function(err, rice) {
                if (err) {
                    return res.json({
                        message: 'Something wrong'
                    });
                } else if(!rice) {
                    return res.json({
                        message: 'Not found!'
                    });
                } else {
                    return res.json(rice);
                }
            });
        });

        app.post('/rice', function(req, res) {
            var newRice = new Rice({
                varity: req.body.varity,
                thai_varity: req.body.thai_varity,
                age: req.body.age,
                area: req.body.area,
                season: req.body.season,
                resist: req.body.resist,
                enemy: req.body.enemy
            });
            newRice.save(function(err) {
                if(err) {
                    return res.json({
                        message: 'Save error!'
                    });
                } else {
                    return res.json({
                        message: 'Saved completed!'
                    });
                }
            })
        });
    };
}());
