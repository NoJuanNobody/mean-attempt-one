var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOveride = require('method-override');
var _ = require('lodash');

// create the app
var app = express();

// add middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOveride('X-HTTP-method-override'));

// CORS SUPPORT	
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});

app.use('/hello', function(req,res,next){
	res.send('hello world');
	next();
});

// connect to mongodb
mongoose.connect('mongodb://localhost/test');
mongoose.connection.once('open', function(){
	
	// Load the models
	app.models = require('./models/index');

	// Load the routes
	var routes = require('./routes');
	_.each(routes, function(controller, route){
		app.use(route, controller(app, route));
	});

	console.log('Listening on port 3000...');
	app.listen(3000);
});