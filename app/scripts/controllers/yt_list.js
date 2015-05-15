'use strict';

/**
 * @ngdoc function
 * @name nowListeningTokyoFrontApp.controller:YtListCtrl
 * @description
 * # YtListCtrl
 * Controller of the nowListeningTokyoFrontApp
 */
angular.module('nowListeningTokyoFrontApp')
  .controller('YtListCtrl', function ($scope,$http,$rootScope) {
    var APIKEY = "AIzaSyD5VdH4vZuheJMLDjwqr8Y0CaR4RQzorAc";
    $scope.src;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$on("result",function(e,result){
      $http({
        method: "GET", 
        url:"https://www.googleapis.com/youtube/v3/search",
        params:{
          q : result.title+" "+result.artist,
          key: APIKEY,
          part : "snippet",
          alt: "json"
        }
      })
      .success(function(data, status, headers, config){
        //SharedService=data;
        console.log(data.items[0]);
        $scope.info ={
            title : data.items[0].snippet.title,
            src : data.items[0].snippet.thumbnails.high.url,
            description: data.items[0].snippet.description,
            url: "http://youtube.com/watch?v="+data.items[0].id.videoId
        }
      })
      .error(function(data,status,headers,config){
      });
    });
  });

