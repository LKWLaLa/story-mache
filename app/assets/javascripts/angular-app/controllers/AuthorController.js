function AuthorController(AuthorsService, $stateParams, $state) {
  var ctrl = this
  

  ctrl.getAuthor = function(){
    AuthorsService.getAuthor($stateParams.name)
    .then(function(author){
      if(author.data == null){
        alert('That is not a valid author.');
        return $state.go('stories');
      }
      ctrl.data = author.data;
      ctrl.contributions = author.data.contributions;
    }, function(error){
        alert('Unable to get author: ' + error.statusText);
    })
  }

  ctrl.getAuthor(); 
 

}

angular
  .module('app')
  .controller('AuthorController', AuthorController);