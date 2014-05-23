'use strict';

angular
  .module('clientApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('notes', {
        url: '/notes',
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl'
      })
      .state('notes.category', {
        url: '/:category',
        templateUrl: 'views/category.html',
        controller: 'NotesCategoryController'
      })      
  });
