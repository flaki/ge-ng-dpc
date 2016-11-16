var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/all', {
      templateUrl: 'templates/allPage.tmpl.html',
      controller: 'allPageController'
    })
    .otherwise({
      templateUrl: 'templates/startPage.tmpl.html',
      controller: 'startPageController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
    rewriteLinks: true
  });
});
