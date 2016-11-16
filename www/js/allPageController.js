angular.module('myApp')
  .controller("allPageController", allPageController);

function allPageController($scope, storageService) {
  $scope.listRecords = storageService.listRecords.bind(storageService);
}
