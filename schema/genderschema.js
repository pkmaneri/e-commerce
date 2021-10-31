var mongoose = require('mongoose');

var genderSchema = new mongoose.Schema({
	genderName: String,

});

module.exports = mongoose.model('gender', genderSchema, 'genders');
