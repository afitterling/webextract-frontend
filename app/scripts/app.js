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
    $stateProvider.go('search');
  }])

  .run(['$rootScope', function ($rootScope) {
    {
      $rootScope.string = 'Alex';
    }
  }])


  .controller('DemoController', ['$scope', function ($scope) {
    $scope.user = {
      title: 'Technical Program Manager',
      email: 'ipsum@lorem.com',
      firstName: 'Naomi',
      lastName: '',
      company: 'Google',
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      country: 'USA',
      postalCode: '94043'
    };
  }])

  .controller('MyController', ['$scope', function ($scope) {
  }])

;
