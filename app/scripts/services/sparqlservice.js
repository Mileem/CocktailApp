'use strict';

/**
 * @ngdoc service
 * @name cocktailAppApp.SparqlService
 * @description
 * # SparqlService
 * Factory in the cocktailAppApp.
 */
angular.module('cocktailAppApp')
  .factory('SparqlService', function () {
    // URL of endpoint
    var baseURL = 'http://dbpedia.org/sparql';

    // Public API here
    return {
      getQueryURL: function (query) {
        var queryURL = baseURL + '?' + 'query='+ encodeURIComponent(query) + '&format=json';
        return queryURL;
      }
    };
  });
