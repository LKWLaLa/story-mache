angular
    .module('app', ['ui.router', 'templates'])
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'landing.html',
        controller: function ($scope) {
          $scope.active = function() { return true; };
        }
      })
      .state('home', {
        url: '/home',
        templateUrl: 'stories.html',
        controller: 'StoriesController as stories',
        resolve: {
          stories: function (StoriesService) {
            return StoriesService.getStories();
          }
        }
      });
          
    $urlRouterProvider.otherwise('/');
   });
  