var STORIES_PER_PAGE = 12;

function StoriesController(stories) {
  var ctrl = this;

  ctrl.data = stories.data;
  ctrl.search = '';
  ctrl.sortBy = '';
  ctrl.minContributions = '';
  ctrl.maxContributions = ''; //end of search/filter bindings


  ctrl.page = 0; //bindings for pagination
  ctrl.totalStories = ctrl.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalStories / STORIES_PER_PAGE);

  ctrl.paginatePosts = function () {
    ctrl.stories = ctrl.data.slice(ctrl.page * STORIES_PER_PAGE, (ctrl.page + 1) * STORIES_PER_PAGE);
  };

  ctrl.nextPage = function () {
    ctrl.page++;
    ctrl.paginatePosts()
  };

  ctrl.previousPage = function () {
    ctrl.page--;
    ctrl.paginatePosts();
  };

  ctrl.paginatePosts();
}

angular
  .module('app')
  .controller('StoriesController', StoriesController);