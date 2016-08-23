function StoriesController(stories, $filter) {
  var ctrl = this;

  ctrl.data = stories.data;

  ctrl.search = '';
  ctrl.sortBy = '';
  ctrl.minContributions = undefined;
  ctrl.maxContributions = undefined; //search/filter bindings

  ctrl.filteredStories = stories.data; //default value for filtering in the controller

  ctrl.displayedStories = []; //two-way binding with myPagination directive

   ctrl.refilter = function () {
    var filtered = ctrl.data;
    filtered = $filter('filter')(filtered, ctrl.search);
    filtered = $filter('greaterThan')(filtered, ctrl.minContributions); 
    filtered = $filter('lessThan')(filtered, ctrl.maxContributions); 
    filtered = $filter('selectedOrder')(filtered, ctrl.sortBy, true);
    ctrl.filteredStories = filtered;
   }  
}

angular
  .module('app')
  .controller('StoriesController', StoriesController);