'use strict';

angular.module('clientApp')
  .controller('NotesCategoryController', function ($scope, $stateParams) {
    console.log($stateParams);
    $scope.category = $stateParams.category;
  });
