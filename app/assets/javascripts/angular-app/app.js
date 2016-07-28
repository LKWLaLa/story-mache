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
      });
          
    $urlRouterProvider.otherwise('/');
   });
  