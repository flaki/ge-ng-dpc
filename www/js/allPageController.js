angular.module('myApp')
  .controller("allPageController", allPageController);

function allPageController($scope, storageService) {
  console.log('allPageController');
  $scope.listRecords = storageService.listRecords.bind(storageService);
}
