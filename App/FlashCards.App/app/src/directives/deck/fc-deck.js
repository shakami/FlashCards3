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

    fcDeckController.$inject = ['$scope', 'dataService', 'notifierService']
    function fcDeckController($scope, dataService, notifierService) {
        $scope.$on('EditEvent', function (event) {
            event.stopPropagation();
            dataService.editDeck($scope.deck)
                .then(function () {
                    notifierService.success();
                })
                .catch(function (reason) {
                    notifierService.warning(reason);
                });
        });
        $scope.$on('DeleteEvent', function (event) {
            event.stopPropagation();
            dataService.deleteDeck($scope.deck)
                .then(function () {
                    $scope.$emit('DeckDeletedEvent', { deck: $scope.deck })
                    notifierService.success();
                }).catch(function (reason) {
                    notifierService.warning(reason);
                });
        });
        $scope.$on('CreateEvent', function (event, args) {
            event.stopPropagation();
            var newDeck = { name: args.title };
            dataService.createDeck(newDeck)
                .then(function (data) {
                    newDeck = data;
                    $scope.$emit('DeckCreatedEvent', { deck: newDeck });
                    notifierService.success();
                })
                .catch(function (reason) {
                    notifierService.warning(reason);
                });
        });
    }

})();
