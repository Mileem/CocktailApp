'use strict';

describe('Controller: CocktailsCtrl', function () {

  // load the controller's module
  beforeEach(module('cocktailAppApp'));

  var CocktailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CocktailsCtrl = $controller('CocktailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CocktailsCtrl.awesomeThings.length).toBe(3);
  });
});
