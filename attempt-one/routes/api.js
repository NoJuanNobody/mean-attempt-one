var express = require('express');
var router = express.Router();

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


	
