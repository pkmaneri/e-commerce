var mongoose=require('mongoose');

var cartSchema = new mongoose.Schema({
	id:String,
	bookId:String,
});

module.exports = mongoose.model('cart', cartSchema, 'carts');
