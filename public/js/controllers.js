var artistControllers = angular.module('artistControllers', [
  'ngAnimate'
]);

artistControllers.controller('IndexController', function($scope) {
    $scope.page = 'Home';
});

artistControllers.controller('SpeakersController', ['$scope', function($scope) {
  $scope.page = 'artistsList';
}]);
