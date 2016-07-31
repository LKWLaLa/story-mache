function StoryController(story) {
  var ctrl = this

  ctrl.data = story.data;
  ctrl.contributorCount = story.data.contributions.length;
  ctrl.lastUpdate = (story.data.contributions.pop()).created_at;

}

angular
  .module('app')
  .controller('StoryController', StoryController);