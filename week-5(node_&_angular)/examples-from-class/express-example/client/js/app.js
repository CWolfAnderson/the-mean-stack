angular.module('app', ['ngRoute', 'ngResource', 'fact.controller', 'file.conroller', 'fact.service']) // get ngRoute from CDN, get fact.controller.js...
// make sure you 'inject' files
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  
  // create some routes (need templateUrl and controller) this is what ng-Route handles for us
  $routeProvider
  .when('/', { // when we're at the home page
  templateUrl: 'views/fact.html',
  controller: 'FactController' // links to fact.controller.js
})
.when('/file', {
  templateUrl: 'views/fact.html',
  controller: 'FileController'
})
.otherwise({
  redirectTo: '/'
});

// says we'll be using HTML5
$locationProvider.html5Mode(true);

}]);