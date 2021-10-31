var mongoose=require('mongoose');

var bookTitleSchema = new mongoose.Schema({
	publisher:String,
	author:String,
	category:String,
	releaseDate:String,
	language:String,
	bookPrice:String,
	imgData:String, 
	isbnNo:String,
	noOfPages:String,
    binding:String,
	returnable:String,
    height:String,
    width:String,
    spineWidth:String,
	bookId:String,
	currency:String,
	
	
});

module.exports = mongoose.model('book', bookTitleSchema, 'books');
