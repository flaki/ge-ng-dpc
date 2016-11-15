var myApp = angular.module('myApp', []);

myApp.controller("myController", myController);

myApp.service("storageService", storageServiceMemory);


function myController($scope, storageService) {
  console.log(storageService);
  $scope.newRecord = {};

  $scope.addRecord = addRecord;

  $scope.listRecords = storageService.listRecords.bind(storageService);

  function addRecord() {
    storageService.addRecord($scope.newRecord);
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
