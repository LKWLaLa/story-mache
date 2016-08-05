function GreaterThan() {
    return function(stories_objects, min) {
    var filtered = [];
     angular.forEach(stories_objects, function(story) {
      if (story.total_contributions >= min){
        filtered.push(story);
        }
    });
    return filtered;
  };
}
 
angular
    .module('app')
    .filter('greaterThan', GreaterThan);
