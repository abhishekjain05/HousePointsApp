'use strict';

describe('Service: NotesService', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var NotesService, httpBackend;
  beforeEach(inject(function (_NotesService_, _$httpBackend_) {
    NotesService = _NotesService_;
    httpBackend = _$httpBackend_;
    httpBackend.when('GET', '/api/notes').respond({notes: []});
  }));

  it('should return expected result', function () {
    NotesService.getNotes().then(function(result) {
      expect(result.notes).toEqual({});
    });
    httpBackend.flush();
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();  
  })

});
