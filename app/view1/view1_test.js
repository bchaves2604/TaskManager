'use strict';

/*describe('myApp.view1 module', function() {

	beforeEach(module('myApp.view1'));

    beforeEach(inject(function(_$controller_, _$httpBackend_, $scope) 
    {
        var controller = _$controller_('View1Ctrl', { $scope: $scope });

        var $httpBackend = _$httpBackend_;
         var mockLanguageList = {name: 'Brandon', dueDate: '2018-05-12'};
        $httpBackend.whenGET('http://localhost:8080/getPendingTasks').respond(200);

    }));

    it('should load task list', function() 
    {
        $httpBackend.flush();

        console.log($scope.getTaskList);

        expect($scope.valid).toBe(true);
        expect($scope.getTaskList).not.toEqual(undefined);
    });
});*/
/*beforeEach(angular.mock.module('myApp.view1'));
beforeEach(function () {
    angular.mock.inject(function (_$httpBackend_, _LeaveService_) {
        $httpBackend = _$httpBackend_;
        service = 'http://localhost:8080/getPendingTasks';
    });
});
it('should demonstrate using when (200 status)', inject(function($http, $_httpBackend_) {
	var $scope = {};
  $httpBackend=$_httpBackend_;
  $httpBackend
  .when('GET', 'http://localhost:8080/getPendingTasks')
    .respond(200, { foo: 'bar' });

  $httpBackend.flush();

  expect($scope.valid).toBe(true);
  expect($scope.getTaskList).not.toEqual(undefined);

}));


describe('leave API service', function () {
    var service;
    var $httpBackend;


    beforeEach(angular.mock.module('myApp.view1'));

    beforeEach(function () {
        angular.mock.inject(function (_$httpBackend_, _LeaveService_) {
            $httpBackend = _$httpBackend_;
            service = _LeaveService_;
        });
    });

    it('should demonstrate using when (200 status)', inject(function($http, $_httpBackend_) {
	var $scope = {};
  $httpBackend=$_httpBackend_;
  $httpBackend
  .when('GET', 'http://localhost:8080/getPendingTasks')
    .respond(200, { foo: 'bar' });

  $httpBackend.flush();

  expect($scope.valid).toBe(true);
  expect($scope.getTaskList).not.toEqual(undefined);

}));
});*/