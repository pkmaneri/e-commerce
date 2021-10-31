var mongoose=require('mongoose');

var publisherSchema = new mongoose.Schema({
	publisherName:String,
	imgData:String,
	
});

module.exports = mongoose.model('publisher', publisherSchema, 'publishers');
