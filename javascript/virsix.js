// create the module and name it virsixApp
// also include ngRoute for all our routing needs
var virsixApp = angular.module('virsixApp', ['ngRoute', 'ui.bootstrap']);

    // configure our routes
    virsixApp.config(function($routeProvider, $locationProvider) {
      $routeProvider

            // route for the home page
            .when('/', {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
              templateUrl : 'pages/about.html',
              controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
              templateUrl : 'pages/contact.html',
              controller  : 'contactController'
            });

            // use the HTML5 History API
            $locationProvider.html5Mode(true);
            
          });

    // create the controller and inject Angular's $scope
    virsixApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'home';
      });

    virsixApp.controller('aboutController', function($scope) {
      $scope.message = 'about';
    });

    virsixApp.controller('contactController', function($scope) {
      $scope.message = 'contact';
    });