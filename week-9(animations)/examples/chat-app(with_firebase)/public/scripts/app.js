angular.module('myApp', ['firebase'])

	.controller('MainCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){

		var ref = new Firebase('https://cs454.firebaseio.com/queue');

		$scope.queue = $firebaseArray(ref);

		$scope.addToQueue = function(name, issue){
			ref.child(name).set(issue);
			$scope.studentName = '';
			$scope.studentIssue = '';
		};

	}]);