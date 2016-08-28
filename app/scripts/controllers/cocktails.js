'use strict';

/**
 * @ngdoc function
 * @name cocktailAppApp.controller:CocktailsCtrl
 * @description
 * # CocktailsCtrl
 * Controller of the cocktailAppApp
 */
angular.module('cocktailAppApp')
  .controller('CocktailsCtrl', function ($scope, $http, CocktailService) {
    var queryURL = CocktailService.getCocktails();

    $http.get(queryURL).success(function(data) {
      $scope.cocktails = data.results.bindings;
    });
  })
  .controller('CocktailViewCtrl', function ($scope, $routeParams, $http, CocktailService) {
    var uri = 'http://dbpedia.org/resource/' + $routeParams.name;
    var queryURL = CocktailService.getCocktail(uri);

    $http.get(queryURL).success(function(data) {
      $scope.cocktail = data.results.bindings[0];
    });
  });
