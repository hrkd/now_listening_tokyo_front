'use strict';

/**
 * @ngdoc function
 * @name nowListeningTokyoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nowListeningTokyoFrontApp
 */
angular.module('nowListeningTokyoFrontApp')
  .controller('MainCtrl', function ($scope,$http,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      $http.jsonp("http://api.nowlistening.tokyo/jwave?callback=JSON_CALLBACK")
          .success(function(data, status, headers, config){
            //SharedService=data;
            $scope.data = data;
            $rootScope.$broadcast('result',data);
          })
          .error(function(data,status,headers,config){
      });

  });
