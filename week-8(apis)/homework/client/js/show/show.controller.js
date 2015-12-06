angular.module('show.controller', [])
// resolve allows you to pass a second argument (in this case 'show')
.controller('ShowController', function($scope, show) {
  
  $scope.show = show;
  
  console.log(show);
  
  // ng-show function
  $scope.pictureExists = function(link) {
    
    console.log("link:");
    console.log(link);
    
    return link || '../../img/profile-placeholder.png';    
      
  };
  
});