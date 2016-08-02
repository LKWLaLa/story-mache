var API_URL ='http://localhost:3000'

function ContributionsService($http) {
  
   this.saveContribution = function (story_id, author, body) {
     return $http.post(API_URL + '/stories/' + story_id + '/contributions', {
      story_id: story_id, 
      author: author,
      body: body
    });
  };
};



angular
  .module('app')
  .service('ContributionsService', ContributionsService);