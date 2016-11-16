angular.module('myApp')
  .controller("startPageController", startPageController);

function startPageController($scope, storageService) {
  console.log('startPageController');
  $scope.newRecord = {};

  $scope.addRecord = addRecord;

  $scope.listRecords = storageService.listRecords.bind(storageService);

  function addRecord() {
    storageService.addRecord($scope.newRecord);
    $scope.newRecord = {};
  }
}
