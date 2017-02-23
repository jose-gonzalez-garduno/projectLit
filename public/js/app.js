var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'IndexController'
  }).when('/speakers', {
    templateUrl: 'partials/speakers.html',
    controller: 'SpeakersController'
  }).when('/speakers/:speakerId', {
    templateUrl: 'partials/speakers.html',
    controller: 'DetailsController'
  }).otherwise({
    redirectTo: '/home'
  });
}]);
