var myApp = angular.module('myApp', ['config']);

myApp.config(function(
  usedStorage,
  storageServiceProvider,
  storageServiceMemoryProvider,
  storageServiceBrowserProvider,
  storageServiceServerProvider
) {
  console.log('Using storage: ', usedStorage);

  switch (usedStorage) {
    case 'Browser':
      storageServiceProvider.$get = storageServiceBrowserProvider.$get;
      break;

    case 'Server':
      storageServiceProvider.$get = storageServiceServerProvider.$get;
      break;

    default:
    case 'Memory':
      storageServiceProvider.$get = storageServiceMemoryProvider.$get;
      break;
  }
});

myApp.controller('myController', myController);

myApp.provider('storageService', function() {
  this.$get = function() {};
});


function myController($scope, storageService) {
  $scope.newRecord = {};

  $scope.addRecord = addRecord;

  $scope.listRecords = storageService.listRecords.bind(storageService);

  function addRecord() {
    storageService.addRecord($scope.newRecord);
    $scope.newRecord = {};
  }
}
