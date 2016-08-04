function StoriesController(stories) {
  this.data = stories.data;
  this.search = '';
  this.sortBy = '';
}

angular
  .module('app')
  .controller('StoriesController', StoriesController);