'use strict';

describe('Controller: CocktailviewCtrl', function () {

  // load the controller's module
  beforeEach(module('cocktailAppApp'));

  var CocktailviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CocktailviewCtrl = $controller('CocktailviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CocktailviewCtrl.awesomeThings.length).toBe(3);
  });
});
