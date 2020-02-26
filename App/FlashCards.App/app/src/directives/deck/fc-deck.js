(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcDeck', fcDeck);

    function fcDeck() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/deck/fc-deck.html',
            scope: {
                deck: '='
            },
            controller: fcDeckController
        };
    }

    fcDeckController.$inject = ['$scope', 'dataService']
    function fcDeckController($scope, dataService) {
        $scope.$on('EditEvent', function (event) {
            event.stopPropagation();
            dataService.editDeck($scope.deck);
        });
        $scope.$on('DeleteEvent', function (event) {
            event.stopPropagation();
            dataService.deleteDeck($scope.deck);
            $scope.$emit('DeckDeletedEvent', { deck: $scope.deck });
        });
        $scope.$on('CreateEvent', function (event, args) {
            event.stopPropagation();
            var newDeck = { name: args.title };
            dataService.createDeck(newDeck).then(function (data) {
                newDeck = data;
                $scope.$emit('DeckCreatedEvent', { deck: newDeck });
            });
        });
    }

})();