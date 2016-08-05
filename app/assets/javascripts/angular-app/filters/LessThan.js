function LessThan() {
   return function(stories_objects, max) {
    var filtered = [];
    if(max == undefined){
      return stories_objects;
    };
     angular.forEach(stories_objects, function(story) {
      if (story.total_contributions <= max) {
        filtered.push(story);
        }
    });
    return filtered;
  };

}
 
angular
    .module('app')
    .filter('lessThan', LessThan);
