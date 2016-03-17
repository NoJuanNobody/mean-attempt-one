'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider,RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/squares', {
        templateUrl: 'views/squares.html',
        controller: 'SquaresCtrl'
        // controllerAs: 'squares'
      })
      .when('/squares/add', {
        templateUrl: 'views/addSquare.html',
        controller: 'AddSquareCtrl'
      })
      .when('/squares/edit/:id', {
        templateUrl: 'views/EditSquare.html',
        controller: 'EditSquareCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('SquareRestangular', function(Restangular){
    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Square', function(SquareRestangular){
    return SquareRestangular.service('square');
  }).service("canvasService", function(){
    this.canvas = new fabric.Canvas('c');
    
    this.start = function(canvas){
      
      canvas.setHeight(800).setWidth(800);
      canvas.setBackgroundColor('black', canvas.renderAll.bind(canvas));
    };
    this.renderSquare = function(obj){
      var rect = new fabric.Rect({
        left: obj.left,
        top: obj.top,
        fill: obj.fill,
        width: obj.width,
        height: obj.height
      }).set('selectable', true);
      this.canvas.add(rect);
      this.canvas.on('object:moving', function(){
        // console.log('translating: '+rect.getLeft()+','+rect.getTop());
        obj.left = rect.getLeft();
        obj.top = rect.getTop();
      });
      // this.canvas.on('object:rotating',function(){
      // console.log("rotating: "+rect.getAngle());
      // });
      // this.canvas.on('object:scaling', function(){
      // console.log('scale x: '+ rect.getScaleX()+','+'scale y: '+rect.getScaleY());
      // });
      obj.render = rect;
      // console.log(obj);
    };

    this.removeSquare= function(obj){
      this.canvas.remove(obj.render);
      // console.log("removing");
    };
  });
  






  // .directive('squareCanvas', function(){
  //   return {
  //     restrict: 'EA',
  //     scope: {data: '='},
  //     replace:true,
  //     template: '<canvas data="" src="" frameborder="0" id="c"></canvas>',
  //     link: function(scope){
  //       console.log(scope);
  //     }
  //     // controller: function($scope){
  //     //   console.log($scope.data);
  //     //   // var canvas = new fabric.Canvas('c')
  //     //   // .setHeight(800).setWidth(800);
  //     //   // canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));

  //     //   // var rect = new fabric.Rect({
  //     //   //   left: $scope.data.left,
  //     //   //   top: $scope.data.top,
  //     //   //   fill: $scope.data.fill,
  //     //   //   width: $scope.data.width,
  //     //   //   height: $scope.data.height
  //     //   // });
  //     //   // canvas.add(rect);

  //     // }
  //   };
  // });
  