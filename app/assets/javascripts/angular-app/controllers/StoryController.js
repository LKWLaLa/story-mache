function StoryController(StoriesService, $stateParams) {
  var ctrl = this
  

  ctrl.getStory = function(){
    StoriesService.getStory($stateParams.id)
    .then(function(story){
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