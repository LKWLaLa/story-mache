function NewStoryController(StoriesService, $state) {
  var ctrl = this

   ctrl.title = '';   

 
    ctrl.createStory = function() {
        StoriesService
            .saveStory(ctrl.title)
            .then(function (response) {
               debugger;
               $state.go('story', {id: response.data.id});
            }, function(error){
        alert('Unable to submit: ' + error.statusText);
       })
    }
 

}

angular
  .module('app')
  .controller('NewStoryController', NewStoryController);