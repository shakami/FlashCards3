(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcNavBar', fcNavBar);

    function fcNavBar() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/Directives/fc-nav-bar.html',
            controller: function ($scope, $location) {
                $scope.search = function () {
                    $scope.$broadcast('searchEvent', { searchPhrase: $scope.searchPhrase });
                }
                $scope.searchGlobal = function () {
                    if ($scope.searchPhrase) {
                        $location.path('/search/' + $scope.searchPhrase);
                    }
                }
            }
        };
    }

})();