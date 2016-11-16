var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/details/:id', {
      templateUrl: '/templates/detailsPage.tmpl.html',
      controller: 'detailsPageController'
    })
    .when('/all', {
      templateUrl: '/templates/allPage.tmpl.html',
      controller: 'allPageController'
    })
    .otherwise({
      templateUrl: '/templates/startPage.tmpl.html',
      controller: 'startPageController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
    rewriteLinks: true
  });
});


myApp.filter('hungarianCurrency', function($filter) {
  return function(value, precision) {
    //return value+' Ft';
    return $filter('currency')(value,'',precision)+' Ft';
  }
});
