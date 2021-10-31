var mongoose=require('mongoose');

var authorSchema = new mongoose.Schema({
	authorName:String,
	imgData:String
	
	
});

module.exports = mongoose.model('author', authorSchema, 'authors');
