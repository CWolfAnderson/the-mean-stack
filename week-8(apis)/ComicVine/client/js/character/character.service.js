angular.module('character.service', [])
// make sure 'CharacterService' matches 'CharacterService' in search.controller.js
	.factory('CharacterService', function ($resource) {		
		return $resource('/api/character/:id');
	});
	