function ContributionsController(ContributionsService, $stateParams, $state) {
    var ctrl = this;

    ctrl.author = ''; 
    ctrl.body = '';   

 
    ctrl.submitForm = function() {
        ContributionsService
            .saveContribution($stateParams.id, ctrl.author, ctrl.body)
            .then(function () {
                ctrl.renderStory();
            }, function(error){
        alert('Unable to submit: ' + error.statusText);
       })
    }

    ctrl.renderStory = function(){
      $state.go('story', {}, { reload: true });;
    }
} 

angular
  .module('app')
  .controller('ContributionsController', ContributionsController);