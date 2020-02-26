(function () {
    'use strict';

    angular.module('app').directive('fcCardDisplay', fcCardDisplay);

    function fcCardDisplay() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/fc-card-display.html',
            transclude: true,
            controller: function ($scope, $routeParams) {
                $scope.searchPhrase = $routeParams.searchPhrase;
                $scope.$on('searchEvent', function (e, args) {
                    $scope.searchPhrase = args.searchPhrase;
                });
            },
            controllerAs: 'vm',
            scope: {
                cards: '='
            }
        }
    }

})();