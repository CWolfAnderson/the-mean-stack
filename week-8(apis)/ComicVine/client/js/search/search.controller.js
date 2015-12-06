angular.module('search.controller', [])

// create directive and call it 'characterPreview'
.directive('characterPreview', function() {
	return {
		// E: element, A: attribute
		restrict: 'EA',
		// element: <character-preview character="characters.main"/>
		// attribute: <div character-preview characters="characters.main"></div>
		
		scope: {
			// you can call 'character' anything
			character: '='
		},
		// where the template is located
		templateUrl: '../views/character.preview.html'
	};
})
// parameters in function used to inject dependencies
.controller('SearchController', function ($scope, SearchService) {
	// $scope.hello = 'Hello World';
	$scope.search = function() {
		// we use .query because we are expecting an array back (.get only gets an object)
		SearchService.query({name: $scope.name}, function(response) {
			// $scope.characters = response;
			
			// to be able to get the first element of the array (superhero) we use response[0]
			// $scope.characters = {main: response[0], alternatives: response};
			
			if (response.length) {
				$scope.characters = {main: response[0], alternatives: response};
			} else {
				$scope.characters = response;
			}
			
		});
	};
});