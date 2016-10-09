var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RiceSchema = new Schema({
    varity: {
        type: String,
        unique: true,
        required: true
    },
    thai_varity: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    resist: {
        type: String,
        required: true
    },
    enemy: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Rice', RiceSchema);
