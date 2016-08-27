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
      .state('new', {
        url: '/new',
        templateUrl: 'new.html',
        controller: 'NewStoryController as new'
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
       .state('authors', {
        url: '/authors/:name',
        templateUrl: 'authors.html',
        controller: 'ContributionsController as contribution'
      })
      .state('story', {
        url: '/stories/:id',
        templateUrl: 'story.html',
        controller: 'StoryController as story'
      })
      .state('story.contribute', {
        templateUrl: 'contribute.html',
        controller: 'ContributionsController as contribution',
        onEnter: function(){
          var story = document.getElementById("story");
          story.scrollTop = story.scrollHeight;
         }
      });
          
    $urlRouterProvider.otherwise('/');
   });
  