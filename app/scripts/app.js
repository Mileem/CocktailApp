'use strict';

/**
 * @ngdoc overview
 * @name cocktailAppApp
 * @description
 * # cocktailAppApp
 *
 * Main module of the application.
 */
angular
  .module('cocktailAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/cocktails', {
        templateUrl: 'views/cocktails.html',
        controller: 'CocktailsCtrl',
        controllerAs: 'cocktails'
      })
      .when('/cocktails/:name', {
        templateUrl: 'views/cocktail-view.html',
        controller: 'CocktailViewCtrl',
        controllerAs: 'cocktails'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
