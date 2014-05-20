'use strict';

describe('Controller: NotesCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var NotesCtrl,
    scope, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();

    httpBackend = _$httpBackend_;

    NotesCtrl = $controller('NotesCtrl', {
      $scope: scope
    });

  }));

  it('should populate the categories correctly on scope using the result from service', function () {
    httpBackend.when('GET', '/api/notes').respond({categories: [
      {"name": "History", notes: [] }, {"name": "People", notes: [] }]});
    httpBackend.flush();
    expect(scope.data.categories.length).toBe(2);
  });
});
