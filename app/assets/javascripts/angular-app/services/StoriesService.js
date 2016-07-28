function StoriesService($http) {
  this.getStories = function () {
    return $http.get('https://localhost:3000/stories')
    .then(function(data){
      console.log(data);
    });
  };


angular
  .module('app')
  .service('StoriesService', StoriesService);