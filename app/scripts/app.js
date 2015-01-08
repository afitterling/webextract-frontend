angular.module('myApp', [
      'ngMaterial'
    , 'ui.router'
  ])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'partials/home.html'
      })
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'partials/search.html'
      })
  }])

  .run(['$rootScope','$location',  function ($rootScope, $location) {

  }])


  .controller('UrlController', ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {
    var self = this;

    $scope.data = {url: ''};

    self.promise = null;

    var timeout = 1500;

    $scope.onChange = function () {
      if (self.promise) {
        $timeout.cancel(self.promise);
      }
      self.promise = $timeout(function(){
        // @TODO API call

        function addhttp(url) {
          if (!/^(f|ht)tps?:\/\//i.test(url)) {
            url = "http://" + url;
          }
          return url;
        }

        $scope.data.url = addhttp($scope.data.url);
        $scope.pending = true;
        $http.post('http://localhost:8080/api/check_url', {url: $scope.data.url}).then(function(success){
          $scope.error = false;
          $scope.pending = false;
          $scope.success = true;
          console.log(success);
//          $scope.retrieve = true;
        }, function(error){
          console.log(error);
          $scope.error = true;
          $scope.pending = null;
        });
      }, timeout)
    };

  }])

  .controller('MyController', ['$scope', function ($scope) {
  }])

;
