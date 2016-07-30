function StoriesController(stories) {
  this.data = stories.data;
  this.search = '';
}

angular
  .module('app')
  .controller('StoriesController', StoriesController);