'use strict';

/**
 * @ngdoc function
 * @name nowListeningTokyoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nowListeningTokyoFrontApp
 */
angular.module('nowListeningTokyoFrontApp')
  .controller('MainCtrl', function ($scope,$YtModel,$cookieStore) {
    var path = location.hash.replace('#/',''),
        promise,
        defaultStation = 'jwave';

    console.log($cookieStore.get('station'));
    if(!$cookieStore.get('station')){
      $cookieStore.put('station',defaultStation);
    }

    //ルートであればクッキーのパス情報を利用
    path = (path=='') ? $cookieStore.get('station') : path;

    //パス情報をクッキーに保存
    $cookieStore.put('station',path);
    $scope.path = path;

    //youtubeのapiからの返却をpromiseで受け取る
    promise = $YtModel(path);

    promise.then(
      function(resolveObj){
        console.log('resolve');
        console.log(resolveObj);
        $scope.info = resolveObj;
      },
      function(rejectObj){
        console.log("error");
      });
  });
