var myApp = angular.module('myApp');
myApp.service("storageService", storageServiceServer);


function storageServiceServer($http) {
  var storage = [];

  $http.get('/api/items').then(function(result) {
    storage = result.data;
  });

  function addRecord(newRecord) {
    $http.put('/api/items', newRecord).then(function(result) {
      if (result.status !== 200) {
        console.log('HTTP ERROR ', result.status);
        return;
      }

      storage.unshift(newRecord);
    });
  }

  function listRecords() {
    return storage.slice();
  }

  this.addRecord = addRecord;
  this.listRecords = listRecords;
}
