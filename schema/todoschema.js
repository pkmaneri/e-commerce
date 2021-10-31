var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	email: String,
	comment:String,
	checked:Boolean,

});

module.exports = mongoose.model('todo', todoSchema, 'todos');

