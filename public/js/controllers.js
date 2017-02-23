var artistControllers = angular.module('artistControllers', [
  'ngAnimate'
]);

artistControllers.factory('speakers', function($http) {
    return $http.get('js/data.json');
});

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
           $scope.summary = true;
       }, function(err) {
           console.log('HTTP request failed with result: ' + err);
       });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$speakerId', function($scope, $http, $speakerId) {
   $http.get('js/data.json')
       .then(function(res) {
           $scope.speakers = res.data;
           $scope.page = 'artistList';
           $scope.description = true;
       }, function(err) {
           console.log('HTTP request failed with result: ' + err);
       });
}]);
