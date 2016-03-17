var mongoose = require('mongoose');

// create the squares Schema
var SquareSchema = new mongoose.Schema({
	// left, top, fill, width, height
	left:{
		type: Number,
		required: true
	},
	top:{
		type: Number,
		required: true
	},
	fill:{
		type: String,
		required: true
	},
	width:{
		type: Number,
		required: true
	},
	height:{
		type: Number,
		required: true
	},
});

// export the model
module.exports = mongoose.model('squares', SquareSchema);