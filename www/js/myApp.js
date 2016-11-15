var myApp = angular.module('myApp', []);

myApp.controller("myController", myController);


function myController($scope, storageService) {
  $scope.newRecord = {};

  $scope.addRecord = addRecord;

  $scope.listRecords = storageService.listRecords.bind(storageService);

  function addRecord() {
    storageService.addRecord($scope.newRecord);
    $scope.newRecord = {};
  }
}
