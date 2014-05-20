'use strict';

angular.module('clientApp')
  .service('NotesService', function NotesService($http, $q) {
        var getNotes= function() {
            var d = $q.defer();
            $http.get('/api/notes')
                .success(function(data) {
                    d.resolve(data);
                })
                .error(function(error) {
                    d.reject(error);
                });
            return d.promise;
         }

    return {
        getNotes: getNotes
    }
  });
