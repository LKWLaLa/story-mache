function MyPagination() {
    return {
        templateUrl: 'directives/page-buttons.html'
    };
}
 
angular
    .module('app')
    .directive('myPagination', MyPagination);