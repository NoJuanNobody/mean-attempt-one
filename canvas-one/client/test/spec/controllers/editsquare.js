'use strict';

describe('Controller: EditsquareCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var EditsquareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditsquareCtrl = $controller('EditsquareCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditsquareCtrl.awesomeThings.length).toBe(3);
  });
});
