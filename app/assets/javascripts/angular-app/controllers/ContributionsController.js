function ContributionsController(StoriesService, $stateParams, $state) {
    var ctrl = this;

    ctrl.author = ''; 
    ctrl.body = '';   

 
    ctrl.submitForm = function() {
        StoriesService
            .updateStory($stateParams.id, ctrl.author, ctrl.body)
            .then(function () {
                 $state.go('story', {}, { reload: true });
            }, function(error){
        alert('Unable to submit: ' + error.statusText);
       })
    }

    
} 

angular
  .module('app')
  .controller('ContributionsController', ContributionsController);