var virsixApp = angular.module('virsixApp', ['ngRoute', 'ui.bootstrap', 'angular-carousel']);

  // router config
  virsixApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

          .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
          })

          .when('/games', {
            templateUrl : 'pages/games.html',
            controller  : 'gamesController'
          })

          .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
          });

          // use the HTML5 History API
          $locationProvider.html5Mode(true);

        });

  // controllers
  virsixApp.controller('mainController', function($scope) {
      $scope.message = 'home';
    });

  virsixApp.controller('gamesController', function($scope) {
    $scope.message = 'games';
  });

  virsixApp.controller('contactController', function($scope) {
    $scope.message = 'contact';
  });

