function StoryController(story) {
  this.data = story.data;
}

angular
  .module('app')
  .controller('StoryController', StoryController);