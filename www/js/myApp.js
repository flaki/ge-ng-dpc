var myApp = angular.module('myApp', []);

myApp.controller("myController", myController);


function myController($scope) {
  $scope.records = [];
  $scope.newRecord = {};

  $scope.addRecord = addRecord;

  function addRecord() {
    $scope.records.push($scope.newRecord);
    $scope.newRecord = {};
  }
}

/*
function addRecord() {
$scope.records.push($scope.newRecord);
$scope.newRecord = {};
}
*/
