'use strict';

/**
 * @ngdoc service
 * @name cocktailAppApp.CocktailService
 * @description
 * # CocktailService
 * Factory in the cocktailAppApp.
 */
angular.module('cocktailAppApp')
  .factory('CocktailService', function (SparqlService) {
    return {
      //List with uri and name of all cocktails of the world
      getCocktails: function () {
        var query = 'SELECT DISTINCT ?uri, ?name, ?image WHERE { ' +
          '?uri rdf:type ?type .' +
          '?uri ?prop_label ?name .' +
          'OPTIONAL { ?uri dbo:thumbnail ?image. }' +
          'FILTER ((?type IN (yago:Cocktail107911677, yago:MixedDrink107911371)) && (?prop_label IN (dbp:name, rdfs:label)) && (lang(?name) = \'en\'))' +
         '}';
        return SparqlService.getQueryURL(query);
      },
      // Informations about one cocktail
      getCocktail: function(uri) {
        var query = 'SELECT DISTINCT ?name, ?abstract, ?ingredients, ?image, ?preparation, ?garnish WHERE { ' +
          '<'+ uri +'> ?prop_label ?name ;' +
            'dbo:abstract ?abstract;' +
            'dbp:ingredients ?ingredients .' +
          'OPTIONAL { <'+ uri +'> dbo:thumbnail ?image . }' +
          'OPTIONAL { <'+ uri +'> dbp:prep ?preparation . }' +
          'OPTIONAL { <'+ uri +'> dbp:garnish ?garnish . }' +
          'FILTER (?prop_label IN (dbp:name, rdfs:label) && lang(?abstract) = \'en\')'+
         '}';
         return SparqlService.getQueryURL(query);
      }
    };
  });
