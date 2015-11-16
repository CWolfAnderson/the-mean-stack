angular.module('character.controller', [])
// resolve allows you to pass a second argument (in this case 'character')
  .controller('CharacterController', function($scope, character) {
    $scope.character = character;
  });