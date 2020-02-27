(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcNavBarSearch', fcNavBarSearch);

    function fcNavBarSearch() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/layout/fc-nav-bar-search.html',
            controller: fcNavBarSearchController
        };
    }

    fcNavBarSearchController.$inject = ['$scope', '$location'];
    function fcNavBarSearchController($scope, $location) {
        var path = $location.path()
        if (path.includes('search')) {
            var index = path.lastIndexOf('/');
            $scope.searchPhrase = path.substr(index + 1);
        }

        $scope.search = function () {
            $scope.$broadcast('searchEvent', { searchPhrase: $scope.searchPhrase });
        }
        $scope.searchGlobal = function () {
            if ($scope.searchPhrase) {
                $location.path('/search/' + $scope.searchPhrase);
            }
        }
    }

})();
