angular
    .module('app', ['ui.router', 'templates'])
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'landing.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html'        
      })
      .state('stories', {
        url: '/stories',
        templateUrl: 'stories.html',
        controller: 'StoriesController as stories',
        resolve: {
          stories: function (StoriesService) {
            return StoriesService.getStories();
          }
        }
      })
      .state('story', {
        url: '/stories/:id',
        templateUrl: 'story.html',
        controller: 'StoryController as story'
      })
      .state('story.contribute', {
        templateUrl: 'contribute.html',
        controller: 'StoryController as story'
      });
          
    $urlRouterProvider.otherwise('/');
   });
  