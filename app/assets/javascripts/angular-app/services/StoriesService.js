var API_URL ='http://localhost:3000'

function StoriesService($http) {
  this.getStories = function () {
    return $http.get(API_URL + '/stories')
  };

   this.getStory = function (id) {
    return $http.get(API_URL + '/stories/' + id)
  };
};



angular
  .module('app')
  .service('StoriesService', StoriesService);