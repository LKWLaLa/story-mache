var STORIES_PER_PAGE = 12;

function StoriesController(stories, $filter) {
  var ctrl = this;

  ctrl.data = stories.data;
  ctrl.search = '';
  ctrl.sortBy = '';
  ctrl.minContributions = undefined;
  ctrl.maxContributions = undefined; //end of search/filter bindings


  ctrl.filteredList = stories.data; //filtering done in the controller

   ctrl.refilter = function () {
    var filtered = ctrl.data;
    filtered = $filter('filter')(filtered, ctrl.search);
    filtered = $filter('greaterThan')(filtered, ctrl.minContributions); 
    filtered = $filter('lessThan')(filtered, ctrl.maxContributions); 
    filtered = $filter('selectedOrder')(filtered, ctrl.sortBy, true);
    ctrl.filteredList = filtered;
    ctrl.resetPageData();
    ctrl.paginate();
   } 

  ctrl.resetPageData = function() {
    ctrl.page = 0; //pagination
    ctrl.totalStories = ctrl.filteredList.length;
    ctrl.totalPages = Math.ceil(ctrl.totalStories / STORIES_PER_PAGE);
  };


  ctrl.paginate = function () {
    ctrl.stories = ctrl.filteredList.slice(ctrl.page * STORIES_PER_PAGE, (ctrl.page + 1) * STORIES_PER_PAGE);
  };

  ctrl.nextPage = function () {
    ctrl.page++;
    ctrl.paginate()
  };

  ctrl.previousPage = function () {
    ctrl.page--;
    ctrl.paginate();
  };

  ctrl.resetPageData();
  ctrl.paginate();
}

angular
  .module('app')
  .controller('StoriesController', StoriesController);