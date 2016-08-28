function ContributionsController(StoriesService, $stateParams, $state) {
    var ctrl = this;

    ctrl.author = ''; 
    ctrl.body = '';   

 
    ctrl.submitForm = function() {
        StoriesService
            .updateStory($stateParams.id, 
              makeUrlFriendly(ctrl.author), 
              ctrl.body)
            .then(function () {
                 $state.go('story', {}, { reload: true });
            }, function(error){
        alert('Unable to submit: ' + error.statusText);
       })
    }

     function makeUrlFriendly(string){
      return string.replace(' ','-')
        .replace(/[.,\/#!$@%\^&\*;:{}=\_`~()]/g,"");
    }

    
} 

angular
  .module('app')
  .controller('ContributionsController', ContributionsController);