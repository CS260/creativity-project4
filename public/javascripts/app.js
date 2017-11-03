var app = window.angular.module('app', [])

app.factory('pokemonFetcher', pokemonFetcher)
app.controller('mainCtrl', mainCtrl)

function pokemonFetcher ($http) {
  
  var API_ROOT = 'pokemon'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    },
    tryit: function() {
      var politics = "/politics";
      return $http
        .get(politics)
        .then(function (resp) {
          console.log("Get Worked");
          console.log(resp.data);
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, pokemonFetcher, $http) {

  $scope.pokemon = [];
  $scope.politics = [];

  pokemonFetcher.get()
    .then(function (data) {
      $scope.pokemon = data;
    });

  pokemonFetcher.tryit()
    .then(function (data) {
      console.log("tryit");
      console.log(data);
      $scope.politics = data;
    });

  $scope.addPoki = function() {
    var formData = {name:$scope.Name,avatarUrl:$scope.Url};
    console.log(formData);
    var pokiURL = 'pokemon';
    $http({
       url: pokiURL,
       method: "POST",
       data: formData
    }).success(function(data, status, headers, config) {
      pokemon.push(data);
      console.log("Post worked");
    }).error(function(data, status, headers, config) {
      console.log("Post failed");
    });
  }
}
















// var app = window.angular.module('app', []);

// app.factory('sleepFetcher', sleepFetcher)
// app.controller('mainCtrl', mainCtrl)

// function sleepFetcher ($http) {
//   return {
//     // tryit: function() {
//     //   var politics = "/ronjokes";
//     //   return $http
//     //     .get(politics)
//     //     .then(function (resp) {
//     //       console.log("Get Worked");
//     //       console.log(resp.data);
//     //       return resp.data
//     //     })
//     // }

//     tryit: function() {
//       var politics = "/ronjokes";
//       return $http
//         .get(politics)
//         .then(function (resp) {
//           console.log("Get Worked");
//           console.log(resp.data);
//           return resp.data
//         })
    
//       }

//   }
// }




// function mainCtrl ($scope, sleepFetcher, $http) {

//   $scope.politics = [];

//   // $scope.test = 'Ron controller is working';
//   // $scope.getNewQuote = function(){
//   //   $http.get(baseUrl).success(function(data){
//   //     console.log(data[0]);
//   //     $scope.quote = data[0];
//   //   })
//   // }
//   // ronService.getQuote().then(function(response){
//   //   console.log(response.data[0]);
//   //   $scope.quote = response.data[0];
//   // })


//   // sleepFetcher.tryit()
//   //   .then(function (data) {
//   //     console.log("Dad Joke tryit");
//   //     console.log(data);
//   //     $scope.politics = data;
//   //   });

//   sleepFetcher.tryit()
//     .then(function (data) {
//       console.log("tryit");
//       console.log(data);
//       $scope.politics = data;
//     });
// }




