var API_URL ='http://localhost:3000'

function AuthorsService($http) {
  
   this.getAuthor = function (name) {
    return $http.get(API_URL + '/authors/' + name)
  };

};

AuthorsService.$inject = ['$http'];


angular
  .module('app')
  .service('AuthorsService', AuthorsService);