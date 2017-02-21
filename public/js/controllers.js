var artistControllers = angular.module('artistControllers', [
  'ngAnimate'
]);

artistControllers.controller('SpeakersController', ['$scope' , '$http', function($scope, $http) {
    $http.get('js/data.json').then(function(response) {
      $scope.title = "Title";
    }, function(result) {
      console.log('HTTP request failed with result: ' + result);
    });
}]);
