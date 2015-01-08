angular.module('myApp', [
      'ngMaterial'
    , 'ui.router'
  ])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
      })
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'partials/search.html'
      })
  }])

  .run(['$rootScope','$location',  function ($rootScope, $location) {
      $rootScope.string = 'Alex';
      $location.path('/');

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
    $scope.todos = [
      {who: 'google.de', what: 'some text and informations', brief: '............................'},
      {who: 'google.de', what: 'some text and informations', brief: '............................'},
      {who: 'google.de', what: 'some text and informations', brief: '............................'},
      {who: 'google.de', what: 'some text and informations', brief: '............................'},
      {who: 'google.de', what: 'some text and informations', brief: '............................'},
      {who: 'google.de', what: 'some text and informations', brief: '............................'},
      {who: 'google.de', what: 'some text and informations', brief: '............................'},
      {who: 'google.de', what: 'some text and informations', brief: '............................'},
      {who: 'google.de', what: 'some text and informations', brief: '............................'},
      {who: 'google.de', what: 'some text and informations', brief: '............................'},
    ];
  }])

  .controller('MyController', ['$scope', function ($scope) {
  }])

;
