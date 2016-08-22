function NewStoryController(StoriesService, $state) {
  var ctrl = this

   ctrl.title = '';   

 
    ctrl.createStory = function(formIsValid) {
      if(formIsValid){
        StoriesService
            .saveStory(ctrl.title)
            .then(function (response) {
               $state.go('story', {id: response.data.id});
            }, function(error){
        alert('Unable to submit: ' + error.statusText);
       })
      }
    }
 

}

angular
  .module('app')
  .controller('NewStoryController', NewStoryController);