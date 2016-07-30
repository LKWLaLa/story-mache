angular
    .module('app', ['ui.router', 'templates'])
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'landing.html'
      })
      .state('site', {
        abstract: true,
        templateUrl: 'site.html'
    })
      .state('site.stories', {
        url: '/stories',
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
  