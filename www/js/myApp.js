var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/all', {
      templateUrl: 'templates/allPage.tmpl.html',
      controller: 'allPageController'
    })
    .otherwise({
      templateUrl: 'templates/startPage.tmpl.html',
      controller: 'startPageController'
    });
});
