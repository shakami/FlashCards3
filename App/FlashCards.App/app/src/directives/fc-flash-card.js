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
            controller: function ($scope, dataService) {
                $scope.$on('EditEvent', function (event) {
                    event.stopPropagation();
                    dataService.editCard($scope.card);
                });
                $scope.$on('DeleteEvent', function (event) {
                    event.stopPropagation();
                    dataService.deleteCard($scope.card);
                    $scope.$emit('CardDeleted', { card: $scope.card });
                });
            }
        };
    }

})();