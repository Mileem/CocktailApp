'use strict';

/**
 * @ngdoc function
 * @name cocktailAppApp.controller:CocktailsCtrl
 * @description
 * # CocktailsCtrl
 * Controller of the cocktailAppApp
 */
angular.module('cocktailAppApp')
  .controller('CocktailsCtrl', function ($scope, CocktailService) {

    CocktailService.getCocktails(function (data) {
      $scope.cocktails = data.results.bindings;
    });


    $scope.getCocktails = function(event) {
      var alcoolResource = event.target.attributes.resource.value;
      CocktailService.getCokctailsWithFilter(alcoolResource, function (data) {
        $scope.cocktails = data.results.bindings;
      });
    };

  })
  .controller('CocktailViewCtrl', function ($scope, $routeParams, $http, CocktailService) {
    var uri = 'http://dbpedia.org/resource/' + $routeParams.name;
    var queryURL = CocktailService.getCocktail(uri);

    $scope.uri = uri;

    $http.get(queryURL).success(function(data) {
      $scope.cocktail = data.results.bindings[0];
    });
  });
