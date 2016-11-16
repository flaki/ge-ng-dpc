var myApp = angular.module('myApp');
//console.log('Loaded storageServiceBrowser');
myApp.service("storageServiceBrowser", storageServiceBrowser);


function storageServiceBrowser() {
  //console.log('Created storageServiceBrowser');
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
