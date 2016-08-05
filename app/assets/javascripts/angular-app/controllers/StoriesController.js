function StoriesController(stories) {
  this.data = stories.data;
  this.search = '';
  this.sortBy = '';
  this.min = '';
  this.max = '';
}

angular
  .module('app')
  .controller('StoriesController', StoriesController);