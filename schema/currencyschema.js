var mongoose=require('mongoose');

var currencySchema = new mongoose.Schema({"currency":String,"prefix":String,"postfix":String});

module.exports = mongoose.model('currency', currencySchema, 'currencies');
