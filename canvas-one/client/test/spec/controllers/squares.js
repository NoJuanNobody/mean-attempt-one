'use strict';

describe('Controller: SquaresCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SquaresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SquaresCtrl = $controller('SquaresCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SquaresCtrl.awesomeThings.length).toBe(3);
  });
});
