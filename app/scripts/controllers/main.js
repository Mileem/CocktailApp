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

    var querySPARQL = '?cocktail a <http://dbpedia.org/class/yago/Cocktail107911677>.' ;
    var queryURL = SparqlService.getQueryURL(querySPARQL);
    $http.get(queryURL).success(function(data) {
        $scope.cocktails = data.results.bindings;
    });

  });
