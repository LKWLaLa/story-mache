function StoryController(story) {
  var ctrl = this

  ctrl.data = story.data;
  ctrl.contributorCount = story.data.contributions.length;

  ctrl.lastUpdate = lastUpdate();

  function lastUpdate(){
    if (ctrl.contributorCount > 0){
    return story.data.contributions.pop().created_at;
   };
   return "contribute to this story!";
  }
 

}

angular
  .module('app')
  .controller('StoryController', StoryController);