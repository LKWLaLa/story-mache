function StoryController(StoriesService, $stateParams) {
  var ctrl = this
  

  ctrl.getStory = function(){
    StoriesService.getStory($stateParams.id)
    .then(function(story){
      ctrl.data = story.data;
      ctrl.contributorCount = story.data.contributions.length;
      ctrl.contributions = story.data.contributions;
      ctrl.lastUpdate = lastUpdate();
    }, function(error){
        alert('Unable to get story: ' + error.statusText);
    })
  }

  ctrl.getStory();


  function lastUpdate(){
    if (ctrl.contributorCount > 0){
    return ctrl.contributions[(ctrl.contributions.length) - 1].created_at;
   };
   return "contribute to this story!";
  }

  
 

}

angular
  .module('app')
  .controller('StoryController', StoryController);