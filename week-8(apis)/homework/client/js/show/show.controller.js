angular.module('show.controller', [])
// resolve allows you to pass a second argument (in this case 'show')
  .controller('ShowController', function($scope, show) {
    $scope.show = show;
  });