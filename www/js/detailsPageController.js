angular.module('myApp')
  .controller("detailsPageController", detailsPageController);

function detailsPageController($scope, storageService, $route, $routeParams) {
  console.log('detailsPageController', $route, $routeParams);

  var data = storageService.listRecords();
  var testingFunction = function(o) { return o._id == $routeParams.id };
  var item = data.find(testingFunction);
  //data.filter(testingFunction)[0];

  $scope.item = item;
  $scope.id = $routeParams.id;
  //=$route.current.pathParams.id
}
