(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcCard', fcCard)

    fcCard.$inject = [];
    function fcCard() {

        var directive = {
            replace: true,
            scope: {
                card: '=',
                new: '@'
            },
            templateUrl: '/app/src/directives/fc-card.html',
            restrict: 'E',
            controller: function ($scope) {
                $scope.editing = false;
                $scope.toggleEdit = function () { $scope.editing = !$scope.editing };
            }
        };
        return directive;
    }

})();