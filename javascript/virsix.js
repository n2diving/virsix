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

  // virsixApp.controller('carouselController', function ($scope) {
  //   $scope.myInterval = 5000;
  //   var slides = $scope.slides = [];
  //   $scope.addSlide = function() {
  //     var newWidth = 600 + slides.length + 1;
  //     slides.push({
  //       image: ['/images/1000-greatforest-1.jpg', '/images/1000-greatforest-3.jpg', 'images/wallball_3d.png', '/images/1000-greatforest-2.jpg', '/images/1000-greatforest-4.jpg'],
  //       text: ['More','Extra','Lots of','Surplus', 'more'][slides.length % 5] + ' ' +
  //         ['Cats', 'Kittys', 'Felines', 'Cutes', 'more'][slides.length % 5]
  //     });
  //   };
  //   for (var i=0; i<5; i++) {
  //     $scope.addSlide();
  //   }
  // });