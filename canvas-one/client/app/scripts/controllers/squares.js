'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SquaresCtrl
 * @description
 * # SquaresCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SquaresCtrl', function ($scope, $http, canvasService) {
	var squares = this;
	// getting data from server
    $http.get("http://localhost:3000/square")
	.success(function(data){
		// console.log(data);
		squares.square = data;
	});

	// adding canvas service to ctrl
	squares.canvas = canvasService.canvas;
	squares.start = canvasService.start;

	// adding square render to ctrl
	squares.renderSquare = canvasService.renderSquare;
	// adding square remove
	squares.removeSquare = canvasService.removeSquare;



  });
