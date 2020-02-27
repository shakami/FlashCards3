(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcSearchPill', fcSearchPill);

    function fcSearchPill() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/layout/fc-search-pill.html',
            controller: function ($scope) {
                $scope.removeSearch = removeSearch;

                function removeSearch() {
                    $scope.$emit('removeSearchEvent');
                }

                $scope.$on('searchEvent', function (e, args) {
                    $scope.searchPhrase = args.searchPhrase;
                })
            }
        };
    }

})();
