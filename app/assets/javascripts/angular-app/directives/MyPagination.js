function MyPagination() {
    return {
        templateUrl: 'directives/page-buttons.html',
        restrict:  'E',

        scope: {
          allItems: '=',
          currentItems: '=',
          itemsPerPage: '='
        },

        controller: function ($scope) {
          $scope.currentPageNo = 1

          $scope.updateTotalPages = function(){
            $scope.totalPages = Math.ceil($scope.allItems.length/$scope.itemsPerPage);
          }

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


          //if allItems changes (because of a separate filter, for instance)
          //pagination should reset

          $scope.$watch('allItems', function() {
            $scope.currentPageNo = 1;
            $scope.updateTotalPages();
            $scope.paginate();
          });
          
          $scope.paginate();
        }
    };
}
 
angular
    .module('app')
    .directive('myPagination', MyPagination);
