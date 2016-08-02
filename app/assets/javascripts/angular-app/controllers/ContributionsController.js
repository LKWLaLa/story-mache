function ContributionsController(ContributionsService, $stateParams) {
    var ctrl = this;

    ctrl.author = ''; 
    ctrl.body = '';   

 
    this.submitForm = function() {
        ContributionsService
            .saveContribution($stateParams.user_id, ctrl.author, ctrl.body)
            .then(function () {
                alert('successfully saved to database!');
            }, function(error){
        alert('Unable to submit: ' + error.statusText);;
    });


}

angular
  .module('app')
  .controller('ContributionsController', ContributionsController);