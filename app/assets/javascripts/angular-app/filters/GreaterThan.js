function GreaterThan() {
    return function(stories_objects, min) {
    var filtered = [];
    if(min == undefined){
      return stories_objects
    };
     angular.forEach(stories_objects, function(story) {
      if (story.total_contributions >= min) {
        filtered.push(story);
        }
    });
    return filtered;
  };

}
 
angular
    .module('app')
    .filter('greaterThan', GreaterThan);
