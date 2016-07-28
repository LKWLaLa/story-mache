function StoriesService($http) {
  this.getStories = function () {
    return $http.get('http://localhost:3000/stories.json')
    .then(function(data){
      console.log(data);
    });
  };
};


angular
  .module('app')
  .service('StoriesService', StoriesService);