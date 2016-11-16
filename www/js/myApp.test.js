var expect = chai.expect;

describe('Testing', function() {
  it('is running properly', function() {});
});

describe('myApp', function() {

  describe('all storage methods', function() {
    beforeEach(function() {
      angular.mock.module('myApp');
    });

    it('has myController', inject( function($controller) {
      var c = $controller('myController', {
        $scope: {}
      });

      expect(c).to.exist;
    }));

    it('myController has an addRecord method', inject( function($controller) {
      var scope = {};
      var c = $controller('myController', {
        $scope: scope
      });

      expect(scope).to.have.property('addRecord');
      expect(scope.addRecord).to.be.a('function');
    }));

  });

  describe('usedStorage = Memory', function() {
    beforeEach(function() {
      angular.mock.module('config', function ($provide) {
        $provide.constant('usedStorage', 'Memory');
      });
      angular.mock.module('myApp');
    });

    it('myController\'s addRecord() works properly', inject( function($controller) {
      var newRecord = {};

      var scope = {};
      var c = $controller('myController', {
        $scope: scope
      });

      var records = scope.listRecords();

      expect(records).to.be.instanceof(Array);
      expect(records).to.have.lengthOf(0);

      scope.newRecord = newRecord;

      expect(scope.addRecord()).to.not.throw;

      records = scope.listRecords();
      expect(records).to.have.lengthOf(1);
    }));

  });

  describe('usedStorage = Browser', function() {
    beforeEach(function() {
      angular.mock.module('config', function ($provide) {
        $provide.constant('usedStorage', 'Browser');
      });

      angular.mock.module('myApp');
    });

    it('myController\'s addRecord() works properly', inject( function($controller) {
      var newRecord = {};

      var scope = {};
      var c = $controller('myController', {
        $scope: scope
      });

      var records = scope.listRecords();
      expect(records).to.be.instanceof(Array);

      scope.newRecord = newRecord;
      var recordcount = records.length

      expect(scope.addRecord()).to.not.throw;

      records = scope.listRecords();
      expect(records).to.have.lengthOf(recordcount + 1);
    }));

  });

});
