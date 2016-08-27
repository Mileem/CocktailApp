'use strict';

describe('Service: SparqlService', function () {

  // load the service's module
  beforeEach(module('cocktailAppApp'));

  // instantiate service
  var SparqlService;
  beforeEach(inject(function (_SparqlService_) {
    SparqlService = _SparqlService_;
  }));

  it('should do something', function () {
    expect(!!SparqlService).toBe(true);
  });

});
