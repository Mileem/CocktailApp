'use strict';

describe('Service: CocktailService', function () {

  // load the service's module
  beforeEach(module('cocktailAppApp'));

  // instantiate service
  var CocktailService;
  beforeEach(inject(function (_CocktailService_) {
    CocktailService = _CocktailService_;
  }));

  it('should do something', function () {
    expect(!!CocktailService).toBe(true);
  });

});
