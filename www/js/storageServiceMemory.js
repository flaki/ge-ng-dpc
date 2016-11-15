var myApp = angular.module('myApp');
myApp.service("storageService", storageServiceMemory);


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
