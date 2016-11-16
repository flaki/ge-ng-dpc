var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/all', {
      template: '<h2>All records</h2>'
    })
    .otherwise({
      templateUrl: 'templates/startPage.tmpl.html',
      controller: 'startPageController'
    });
});
