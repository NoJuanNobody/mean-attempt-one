'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EditsquareCtrl
 * @description
 * # EditsquareCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EditSquareCtrl', function (Square, $location, $routeParams, $http) {
  	var editSquare = this;
	editSquare.UpdateSquare = {};
	Square.one($routeParams.id).get().then(function(oldSquare){
	// console.log(oldSquare);
	editSquare.UpdateSquare = oldSquare;
	editSquare.save = function(UpdateSquare){
		console.log(UpdateSquare);
		$http.put("http://localhost:3000/square/"+$routeParams.id,UpdateSquare)
		.success(function(data){
			console.log(data);
			$location.path('/squares');
		});
	};
	});

  });
