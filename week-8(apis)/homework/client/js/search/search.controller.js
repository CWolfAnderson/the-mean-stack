angular.module('search.controller', [])

// create directive and call it 'showPreview'
.directive('showPreview', function() {
	return {
		// E: element, A: attribute
		restrict: 'EA',
		// element: <show-preview show="shows.main"/>
		// attribute: <div show-preview shows="shows.main"></div>
		
		scope: {
			// you can call 'show' anything
			show: '='
		},
		// where the template is located
		templateUrl: '../views/show.preview.html'
	};
})
// parameters in function used to inject dependencies
.controller('SearchController', function ($scope, SearchService) {
	// $scope.hello = 'Hello World';
	$scope.search = function() {
		// we use .query because we are expecting an array back (.get only gets an object)
		SearchService.query({name: $scope.name}, function(response) {
			// $scope.shows = response;
			
			// to be able to get the first element of the array (superhero) we use response[0]
			// $scope.shows = {main: response[0], alternatives: response};
			
			if (response.length) {
				$scope.shows = {main: response[0], alternatives: response};
			} else {
				$scope.shows = response;
			}

		});
	};
});