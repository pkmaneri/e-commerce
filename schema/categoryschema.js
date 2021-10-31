var mongoose=require('mongoose');

var categorySchema = new mongoose.Schema({
	link:String,
	categoryName:String,
    available:Boolean,
	imgData:String,


});

module.exports = mongoose.model('category', categorySchema, 'categories');
