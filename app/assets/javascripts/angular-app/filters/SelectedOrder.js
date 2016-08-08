function SelectedOrder() {
    return function(stories_objects, property, reverse) {
    var filtered = [];
    angular.forEach(stories_objects, function(story) {
      filtered.push(story);
    });
    if (property == "") {return filtered};
    filtered.sort(function (a, b) {
      return (a[property] > b[property] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
}
 
angular
    .module('app')
    .filter('selectedOrder', SelectedOrder);