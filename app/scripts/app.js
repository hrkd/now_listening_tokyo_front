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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('#/tfm', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


