angular.module('myApp')
  .controller("navController", navController)
  .directive('myNav', function() { // <my-nav>, <nav my-nav>
    return {
      controller: navController,
      template: '<a href="{{r.originalPath}}" ng-repeat="r in routes">{{r.title}}</a>'
      //,restrict: 'AE'
    }
  });

function navController($scope, $route) {
  console.log('navController', $route);
  $scope.routes = [
    { title: "Home", originalPath: "/"},
    { title: "List All", originalPath: "/all"}
  ];
}
