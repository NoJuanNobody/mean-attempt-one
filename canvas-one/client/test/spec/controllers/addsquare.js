'use strict';

describe('Controller: AddsquareCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AddsquareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddsquareCtrl = $controller('AddsquareCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddsquareCtrl.awesomeThings.length).toBe(3);
  });
});
