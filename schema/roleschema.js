var mongoose = require('mongoose');

var roleSchema = new mongoose.Schema({
	roleName: String,

});

module.exports = mongoose.model('role', roleSchema, 'roles');
