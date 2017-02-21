var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'partials/main.html',
    controller: 'HomeController'
  }).when('/speakers', {
    templateUrl: 'partials/speakers.html',
    controller: 'SpeakersController'
  }).otherwise({
    redirectTo: '/home'
  });
}]);
