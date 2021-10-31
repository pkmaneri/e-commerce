var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    mobile: String,
    password: String,
    role: String,
    lastName: String,
    email: String,
    firstName: String,
    gender: String,
    address: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    language:String,
    imgData:String,
    country:String,
    organisation:String,

});

module.exports = mongoose.model('user', userSchema, 'users');
