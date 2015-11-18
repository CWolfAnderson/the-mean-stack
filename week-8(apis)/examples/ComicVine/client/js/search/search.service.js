angular.module('search.service', [])
// make sure 'SearchService' matches 'SearchService' in search.controller.js
	.factory('SearchService', function ($resource) {		
		return $resource('/api/character/search');
	});
