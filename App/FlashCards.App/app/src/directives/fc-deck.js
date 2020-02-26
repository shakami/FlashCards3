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
            controller: function ($scope) {
                $scope.$on('EditEvent', function (e, args) {
                    $scope.$emit('DeckEditEvent', { deck: $scope.deck });
                });
                $scope.$on('DeleteEvent', function (e, args) {
                    $scope.$emit('DeckDeleteEvent', { deck: $scope.deck });
                });
            }
        };
    }
    
})();