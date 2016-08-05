function StoriesController(stories) {
  this.data = stories.data;
  this.search = '';
  this.sortBy = '';
  this.minContributions = '';
  this.maxContributions = '';
}

angular
  .module('app')
  .controller('StoriesController', StoriesController);