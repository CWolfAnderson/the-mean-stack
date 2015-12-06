angular.module('myApp', [])

.controller('MainCtrl', ['$scope', function($scope){
	
	$scope.messages = [];
	
	$scope.newMessage = '';
	
	$scope.socket = io();
	
	// $scope.others = {};
	
	$scope.sendMousePosition = function() {
	  console.log("(" + event.x + ", " + event.y + ")");
	};
	
	$scope.sendMessage = function(message){
		$scope.socket.emit('chat message', message);
		$scope.newMessage = '';
	};
	
	$scope.socket.on('chat message', function(msg){
		$scope.messages.push(msg);
		// $scope.$apply();
	});
	
	
	
}]);