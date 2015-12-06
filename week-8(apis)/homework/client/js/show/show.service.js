angular.module('show.service', [])
// make sure 'ShowService' matches 'ShowService' in show.controller.js
.factory('ShowService', function ($resource) {		
	return $resource('/shows/:id');
});
