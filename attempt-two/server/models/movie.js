var mongoose = require('mongoose');

// create movieSchema
var MovieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});

// Export the model Schema
module.exports = MovieSchema;

