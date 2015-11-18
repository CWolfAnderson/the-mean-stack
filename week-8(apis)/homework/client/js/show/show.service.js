angular.module('show.service', [])
// make sure 'ShowService' matches 'ShowService' in search.controller.js
	.factory('ShowService', function ($resource) {		
		return $resource('/api/show/:id');
	});
	