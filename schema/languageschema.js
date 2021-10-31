var mongoose=require('mongoose');

var languageSchema = new mongoose.Schema({"code": String,"name":String,"nativeName":String});

module.exports = mongoose.model('language', languageSchema, 'languages');
