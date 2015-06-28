'use strict';

angular.module('nowListeningTokyoFrontApp')
  .factory('$YtModel', function ($http,$q) {
    var APIKEY = "AIzaSyD5VdH4vZuheJMLDjwqr8Y0CaR4RQzorAc",
        searchUrl = 'https://www.googleapis.com/youtube/v3/search',
        watchUrl = 'http://youtube.com/watch',
        proxy = "http://api.nowlistening.tokyo/",
        d,
        promise,
        getList,
        resolveObj,
        rejectObj;

    //プロキシサーバーから結果が返ってきたらyoutubeで検索して結果を返す
    getList = function(data){
      $http({
        method: "GET",
        url: searchUrl,
        params:{
          q : data.title+" "+ data.artist,
          key: APIKEY,
          part : "snippet",
          alt: "json"
        }
      })
      .success(function(data, status, headers, config){
        if(data.items){
            console.log(data.items);
            resolveObj = {
              title : data.items[0].snippet.title,
              src : data.items[0].snippet.thumbnails.high.url,
              description: data.items[0].snippet.description,
              url: watchUrl+"?v="+data.items[0].id.videoId
            };
            d.resolve(resolveObj);
        }else{
            d.reject(rejectObj);
        }
      })
      .error(function(data,status,headers,config){
          d.reject(rejectObj);
      });
    };

    //曲情報のプロキシサーバーに問い合わせ
    return function(station){
      d = $q.defer();
      promise = d.promise;
      $http.jsonp(proxy+station+"?callback=JSON_CALLBACK")
        .success(function(data, status, headers, config){
          getList(data);
        })
        .error(function(data,status,headers,config){
      });
      return promise;
    }
  });

