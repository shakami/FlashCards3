(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcDeck', fcDeck)

    fcDeck.$inject = [];
    function fcDeck() {

        var directive = {
            replace: true,
            scope: {
                deck: '=',
                new: '@'
            },
            templateUrl: '/app/src/directives/fc-deck.html',
            restrict: 'E',
            controller: function ($scope) {
                $scope.editing = false;
                $scope.toggleEdit = function () { $scope.editing = !$scope.editing };
            }
        };
        return directive;
    }

})();