var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/speakers', {
    templateUrl: 'speakers.ejs',
    controller: 'HomeController'
  }).when('/speakers/:speakerId', {
    templateUrl: 'speakers.ejs',
    controller: 'SpeakersController'
  }).otherwise({
    redirectTo: '/home'
  });
}]);
