function StoryController(StoriesService, $stateParams, $state) {
  var ctrl = this
  

  ctrl.getStory = function(){
    StoriesService.getStory($stateParams.id)
    .then(function(story){
      if(story.data == null){
        alert('That is not a valid story id.');
        return $state.go('stories');
      }
      ctrl.data = story.data;
      ctrl.contributions = story.data.contributions;
    }, function(error){
        alert('Unable to get story: ' + error.statusText);
    })
  }

  ctrl.getStory(); 
 

}

angular
  .module('app')
  .controller('StoryController', StoryController);