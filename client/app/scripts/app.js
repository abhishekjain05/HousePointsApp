'use strict';

angular
  .module('clientApp', ['ui.router'])
  .run(function($rootScope){

    $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
      /*if (!routeClean($location.url()) && !AuthenticationService.isLoggedIn()) {
        // redirect back to login
        $location.path('/login');
      }
      else if (routeAdmin($location.url() && !UserService.validateRoleAdmin()) {
        // redirect to error page
        $location.path('/error');
      }*/
      console.log(to);
    });
     
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("/", "/notes");
    $urlRouterProvider.otherwise("/notes");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('home.notes', {
        url: 'notes',
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl'
      })
      .state('home.register', {
        url: 'register',
        templateUrl: 'views/register.html'
      })      
      .state('home.login', {
        url: 'login',
        templateUrl: 'views/login.html'
      })      
      .state('home.notes.category', {
        url: '/:category',
        templateUrl: 'views/category.html',
        controller: 'NotesCategoryController'
      })      
  });
