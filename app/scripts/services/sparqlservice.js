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
      getQueryURL: function (querySPARQL) {
        querySPARQL = 'SELECT DISTINCT ?uri, ?name, ?image WHERE { ' + querySPARQL + '}';
        var queryURL = baseURL + '?' + 'query='+ encodeURIComponent(querySPARQL) + '&format=json';
        return queryURL;
      }
    };
  });
