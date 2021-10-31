var mongoose=require('mongoose');

var imageSchema = new mongoose.Schema({
	data:String,
	

});

module.exports = mongoose.model('image', imageSchema, 'images');
