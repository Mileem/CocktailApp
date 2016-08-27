'use strict';

/**
 * @ngdoc function
 * @name cocktailAppApp.controller:CocktailsCtrl
 * @description
 * # CocktailsCtrl
 * Controller of the cocktailAppApp
 */
angular.module('cocktailAppApp')
  .controller('CocktailsCtrl', function ($scope, $http, SparqlService) {

    var querySPARQL = '?x2 rdfs:subClassOf yago:Cocktail107911677 .' +
    '?uri a yago:Cocktail107911677 .' +
    '?uri a ?x2 .' +
    '?uri dbp:name ?name .' +
    '?uri dbp:ingredients ?ingredients .' +
    '?uri dbo:thumbnail ?image .' ;

    var queryURL = SparqlService.getQueryURL(querySPARQL);

    $http.get(queryURL).success(function(data) {
      console.log(data.results.bindings);
      $scope.cocktails = data.results.bindings;
    });




  })
  .controller('CocktailViewCtrl', function ($scope, $routeParams, $http, SparqlService) {
    console.log($routeParams.name);
    var uri = 'http://dbpedia.org/resource/' + $routeParams.name;
    console.log(uri);

    var querySPARQL = '<'+ uri +'> dbp:name ?name ;' +
    ' dbo:abstract ?abstract;' +
    'dbp:ingredients ?ingredients.' +
    'OPTIONAL { <'+ uri +'> dbo:thumbnail ?thumbnail. }' +
    'OPTIONAL { <'+ uri +'> dbp:prep ?preparation. }' +
    'OPTIONAL { <'+ uri +'> dbp:garnish ?garnish. }' +
    'FILTER (lang(?abstract) = \'en\')';

    var queryURL = SparqlService.getQueryURL(querySPARQL);

    $http.get(queryURL).success(function(data) {
      console.log(data.results.bindings[0]);
      $scope.cocktail = data.results.bindings[0];
    });

  });
