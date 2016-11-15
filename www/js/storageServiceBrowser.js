var myApp = angular.module('myApp');
myApp.service("storageService", storageServiceBrowser);


function storageServiceBrowser() {
  var storage = JSON.parse(localStorage.getItem('storageServiceBrowser')||'[]');

  function addRecord(newRecord) {
    storage.push(newRecord);
    localStorage.setItem('storageServiceBrowser',JSON.stringify(storage));
  }

  function listRecords() {
    return storage.slice();
  }

  this.addRecord = addRecord;
  this.listRecords = listRecords;
}
