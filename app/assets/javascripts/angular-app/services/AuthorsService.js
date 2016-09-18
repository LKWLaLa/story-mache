var API_URL ='https://story-mache.herokuapp.com'

function AuthorsService($http) {
  
   this.getAuthor = function (name) {
    return $http.get(API_URL + '/authors/' + name)
  };

};

AuthorsService.$inject = ['$http'];


angular
  .module('app')
  .service('AuthorsService', AuthorsService);