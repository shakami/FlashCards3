(function () {
    'use strict';
    
    angular
        .module('app')
        .directive('fcDeck', fcDeck);
    
    function fcDeck() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/Directives/fc-deck.html',
            scope: {
                deck: '='
            },
            controller: function ($scope, dataService) {
                $scope.$on('EditEvent', function (event) {
                    event.stopPropagation();
                    dataService.editDeck($scope.deck);
                });
                $scope.$on('DeleteEvent', function (event) {
                    event.stopPropagation();
                    dataService.deleteDeck($scope.deck);
                    $scope.$emit('DeckDeleted', { deck: $scope.deck });
                });
            }
        };
    }
    
})();