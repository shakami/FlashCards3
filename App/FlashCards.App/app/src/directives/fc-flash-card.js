(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcFlashCard', fcFlashCard);

    function fcFlashCard() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/Directives/fc-flash-card.html',
            scope: {
                card: '='
            },
            controller: function ($scope) {
                $scope.$on('EditEvent', function (e, args) {
                    $scope.$emit('CardEditEvent', { card: $scope.card });
                });
                $scope.$on('DeleteEvent', function (e, args) {
                    $scope.$emit('CardDeleteEvent', { card: $scope.card });
                });
            }
        };
    }

})();