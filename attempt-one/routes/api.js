var express = require('express');
var router = express.Router();

//Register the authentication middleware
router.use('/posts', function(req, res, next){
	// if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects

    //allow all get request methods
    if(req.method === "GET"){
        return next();
    }
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not authenticated then redirect him to the login page
    return res.redirect('/#login');
});

//api for all posts
router.route('/posts')
	
	//create new post
	.post(function(req, res){
		
		//TODO create a new post in the database
		res.send({message:"TODO CREATE A NEW POST IN THE DATABASE"});
	
	})
	.get(function(req, res){
		
		//TODO get all the posts in the database
		res.send({message:"TODO get all the posts in the database"});

	});

//api for a specific post

router.route('/posts/:id')
	.put(function(req, res){
		return res.send({message: 'TODO modify an exsisting postby using param'});
	})
	.get(function(req, res){
		return res.send({
			message:'TODO get an exsisting post by using para'+req.param.id});
	})
	.delete(function(req, res){
		return res.send({message: 'TODO delete an exsisting post by using param' + req.param.id});
	});



module.exports = router;


	
