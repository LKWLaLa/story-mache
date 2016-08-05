var API_URL ='http://localhost:3000'

function StoriesService($http) {
  
  this.getStories = function () {
    return $http.get(API_URL + '/stories')
  };

   this.getStory = function (id) {
    return $http.get(API_URL + '/stories/' + id)
  };

   this.saveStory = function (title) {
     return $http.post(API_URL + '/stories/', {
      title: title
    });
  };

  this.updateStory = function (id, author, body) {
    return $http.patch(API_URL + '/stories/' + id, {
       contributions_attributes:
       [{
        author: author,
        body: body
       }]
     });
  };


};



angular
  .module('app')
  .service('StoriesService', StoriesService);