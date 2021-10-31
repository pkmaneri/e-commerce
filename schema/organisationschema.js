var mongoose=require('mongoose');

var organisationSchema = new mongoose.Schema({
	organisationName:String,
	imgData:String,
		
});

module.exports = mongoose.model('organisation', organisationSchema, 'organisations');
