var mongoose = require('mongoose');

var mycartSchema = new mongoose.Schema({
	pname:String,
	pprice:String,
	pphoto:String,
	details:String,
});

module.exports = mongoose.model('mycart', mycartSchema, 'mycarts');





