// use ng-Resource
angular.module('fact.service', [])
.factory('factResource', function($resource) { // $resource is part of ng-Resource
  // notice we use .factory instead of .controller
  
  return $resource('/api/:type');
  // resource accepts 3 args total
  // first argument is the location of where it needs to go
  // second: overrides on params
  // third: 
  // query returns everything whereas get returns one single item
  // $resource:
  /*
  {
  get: {method: "GET"},
  ...
}

*/
});