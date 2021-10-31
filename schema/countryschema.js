var mongoose = require('mongoose');

var countrySchema = new mongoose.Schema({
    name: String,
    available:Boolean,


});

module.exports = mongoose.model('country', countrySchema, 'countries');
