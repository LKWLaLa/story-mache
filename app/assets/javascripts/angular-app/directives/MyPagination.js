function MyPagination() {
    return {
        templateUrl: 'directives/page-buttons.html',
        restrict:  'E',

        scope: {
          currentPageNo: '=',
          allItems: '=',
          currentItems: '=',
          itemsPerPage: '='
        },

        controller: function ($scope) {

          $scope.previousPage = function () {
            $scope.currentPageNo--;
            $scope.paginate();
          }

          $scope.nextPage = function() {
            $scope.currentPageNo++;
            $scope.paginate();
          }
          
          $scope.paginate = function () {
            var begin = (($scope.currentPageNo - 1) * $scope.itemsPerPage);
            var end = begin + $scope.itemsPerPage;
            $scope.currentItems = $scope.allItems.slice(begin,end);
          };

          
          
          $scope.paginate();
        }
    };
}
 
angular
    .module('app')
    .directive('myPagination', MyPagination);
