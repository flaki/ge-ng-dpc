var myApp = angular.module('myApp', []);

myApp.controller("myController", myController);

myApp.service("storageService", storageServiceMemory);


function myController($scope, storageService) {
  console.log(storageService);
  $scope.records = [];
  $scope.newRecord = {};

  $scope.addRecord = addRecord;

  function addRecord() {
    storageService.addRecord($scope.newRecord);
    $scope.records = storageService.listRecords();
    $scope.newRecord = {};
  }
}

function storageServiceMemory() {
  var storage = [];

  function addRecord(newRecord) {
    storage.push(newRecord);
  }

  function listRecords() {
    return storage.slice();
  }

  this.addRecord = addRecord;
  this.listRecords = listRecords;
}
