var app = window.angular.module('app', []);

app.factory('chuckFetcher', chuckFetcher)
app.controller('mainCtrl', mainCtrl)

function chuckFetcher ($http) {
  return {


    tryit: function() {
      var chuckNorrisJokes = "/chuckjokes";
      return $http
        .get(chuckNorrisJokes)
        .then(function (resp) {
          console.log("Get Worked");
          console.log(resp.data);
          return resp.data
        })
    
      }

  }
}




function mainCtrl ($scope, chuckFetcher, $http) {

  $scope.getNewQuote = function(){
     chuckFetcher.tryit()
    .then(function (data) {
      console.log("tryit");
      console.log(data);
      $scope.chuckNorrisJokes = data.value.joke;
    });
  }



  chuckFetcher.tryit()
    .then(function (data) {
      console.log("tryit");
      console.log(data);
      $scope.chuckNorrisJokes = data.value.joke;
    });
}




