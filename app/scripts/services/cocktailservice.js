'use strict';

/**
 * @ngdoc service
 * @name cocktailAppApp.CocktailService
 * @description
 * # CocktailService
 * Factory in the cocktailAppApp.
 */
angular.module('cocktailAppApp')
  .factory('CocktailService', function ($http, SparqlService) {
    return {
      //List with uri and name of all cocktails of the world
      getCocktails: function (callback) {
        var query = 'SELECT DISTINCT ?uri, ?name, ?image WHERE { ' +
          '?uri rdf:type ?type .' +
          '?uri ?prop_label ?name .' +
          'OPTIONAL { ?uri dbo:thumbnail ?image. }' +
          'FILTER ((?type IN (yago:Cocktail107911677, yago:MixedDrink107911371)) && (?prop_label IN (dbp:name, rdfs:label)) && (lang(?name) = \'en\'))' +
         '} ORDER BY ?name';
         $http.get(SparqlService.getQueryURL(query)).
         success(function(data, status) {
           callback(data, status);
         });
      },
      // Informations about one cocktail
      getCocktail: function(uri, callback) {
        var query = 'SELECT DISTINCT ?name, ?abstract, ?ingredients, ?image, ?preparation, ?garnish WHERE { ' +
          '<'+ uri +'> ?prop_label ?name ;' +
            'dbo:abstract ?abstract;' +
            'dbp:ingredients ?ingredients .' +
          'OPTIONAL { <'+ uri +'> dbo:thumbnail ?image . }' +
          'OPTIONAL { <'+ uri +'> dbp:prep ?preparation . }' +
          'OPTIONAL { <'+ uri +'> dbp:garnish ?garnish . }' +
          'FILTER (?prop_label IN (dbp:name, rdfs:label) && lang(?abstract) = \'en\')'+
         '}';
         $http.get(SparqlService.getQueryURL(query)).
         success(function(data, status) {
           callback(data, status);
         });
      },
      getCokctailsWithFilter: function(filter, callback) {
        var query = 'SELECT DISTINCT ?uri, ?name, ?image WHERE { ' +
          '?uri rdf:type <'+ filter +'> .' +
          '?uri ?prop_label ?name .' +
          'OPTIONAL { ?uri dbo:thumbnail ?image. }' +
          'FILTER ((?prop_label IN (dbp:name, rdfs:label)) && (lang(?name) = \'en\'))' +
         '} ORDER BY ?name';
         $http.get(SparqlService.getQueryURL(query)).
         success(function(data, status) {
           callback(data, status);
         });
      }
    };
  });
