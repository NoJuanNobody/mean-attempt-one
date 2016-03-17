var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var _ = require('lodash');

//create application
var app = express();

//add middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));


//CORS SUPPORT
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});



//connect to mongoDB
mongoose.connect('mongodb://localhost/test');
mongoose.connection.once('open', function(){

// load all the models
app.models = require('./models/index');

// load routes
var routes = require('./routes');
_.each(routes, function(controller, route){
	app.use(route, controller(app, route));
});

console.log('listening on port 3000');
app.listen(3000);

});
