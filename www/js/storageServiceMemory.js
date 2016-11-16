var myApp = angular.module('myApp');
//console.log('Loaded storageServiceMemory');
myApp.service("storageServiceMemory", storageServiceMemory);


function storageServiceMemory() {
  //console.log('Created storageServiceMemory');
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
