var mongoose = require('mongoose');
var AlcoholSchema = new mongoose.Schema({
	name: String,
	image: String,
	nose: String,
	palate: String,
	finish: String,
	country: String
});
mongoose.model('Alcohol', AlcoholSchema);

module.exports = mongoose.model('Alcohol');
