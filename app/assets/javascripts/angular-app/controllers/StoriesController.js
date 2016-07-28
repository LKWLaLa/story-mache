function StoriesController(stories) {
  this.data = stories.data
}

angular
  .module('app')
  .controller('StoriesController', StoriesController);