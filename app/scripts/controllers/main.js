'use strict';

/**
 * @ngdoc function
 * @name cocktailAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cocktailAppApp
 */
angular.module('cocktailAppApp')
  .controller('MainCtrl', function ($scope, $http, SparqlService) {

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



  });
