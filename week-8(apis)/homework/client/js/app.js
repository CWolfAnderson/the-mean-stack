angular.module('app', ['ngRoute', 'ngResource', 'search.controller', 'search.service', 'show.controller', 'show.service'])
// don't forget to add controllers & services to app.js (and index.html)

// custom filter because ng-bind-html doesn't trust apis
.filter('trustHTML', function($sce) {
  // you can see $sce in console if you run ng-bind-html
  return function(text) {
    return $sce.trustAsHtml(text);
  };
})

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  
  $routeProvider
  .when('/', {
    templateUrl: 'views/search.html',
    controller: 'SearchController'
  })
  // handle show pages
  .when('/show/:id', {
    templateUrl: 'views/show.html',
    controller: 'ShowController',
    resolve: {
      // resolve allows you to inject variables into your ShowController
      show: function($route, ShowService) {
        // use .get because we are getting only one item
        // services are always promises
        return ShowService.get({id: $route.current.params.id});
        // $route.current.params.id accesses url
        // you can also do $route.previous.params.id
      }
    }
  })
  
  .otherwise({
    redirectTo: '/'
  });
  
  $locationProvider.html5Mode(true);
}]);
