'use strict';

/**
 * @ngdoc overview
 * @name nowListeningTokyoFrontApp
 * @description
 * # nowListeningTokyoFrontApp
 *
 * Main module of the application.
 */
angular
  .module('nowListeningTokyoFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/jwave', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tfm', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


