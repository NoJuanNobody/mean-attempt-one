'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AddsquareCtrl
 * @description
 * # AddsquareCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
	.controller('AddSquareCtrl', function ($http, $location) {
		this.newSquare = {};
		this.save=function(newSquare){
			console.log(newSquare);
			$http.post("http://localhost:3000/square",newSquare)
			.success(function(data){
				console.log(data);
				$location.path('/squares');
			});
		};
	});
