var artistControllers = angular.module('artistControllers', [
  'ngAnimate'
]);

artistControllers.controller('IndexController', ['$scope', '$http', function($scope, $http) {
   $http.get('js/data.json')
       .then(function(res) {
           $scope.speakers = res.data;
           $scope.page = 'home';
       }, function(err) {
           console.log('HTTP request failed with result: ' + err);
       });
}]);

artistControllers.controller('SpeakersController', ['$scope', '$http', function($scope, $http) {
   $http.get('js/data.json')
       .then(function(res) {
           $scope.speakers = res.data;
           $scope.page = 'artistList';
       }, function(err) {
           console.log('HTTP request failed with result: ' + err);
       });
}]);
