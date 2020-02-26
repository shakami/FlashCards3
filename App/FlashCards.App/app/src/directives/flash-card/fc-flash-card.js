(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcFlashCard', fcFlashCard);

    function fcFlashCard() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/flash-card/fc-flash-card.html',
            scope: {
                card: '='
            },
            controller: fcFlashCardController
        };
    }

    fcFlashCardController.$inject = ['$scope', 'dataService', '$location', 'notifierService'];
    function fcFlashCardController($scope, dataService, $location, notifierService) {
        $scope.$on('EditEvent', function (event) {
            event.stopPropagation();
            dataService.editCard($scope.card)
                .then(function () {
                    notifierService.success();
                })
                .catch(function (reason) {
                    notifierService.error(reason);
                });
        });
        $scope.$on('DeleteEvent', function (event) {
            event.stopPropagation();
            dataService.deleteCard($scope.card)
                .then(function () {
                    $scope.$emit('CardDeletedEvent', { card: $scope.card });
                    notifierService.success();
                })
                .catch(function (reason) {
                    notifierService.error(reason);
                });
        });
        $scope.$on('CreateEvent', function (event, args) {
            event.stopPropagation();

            var path = $location.path()
            var index = path.lastIndexOf('/');
            var deckId = path.substr(index + 1);

            var newCard = { title: args.title, description: args.text };

            dataService.createCard(deckId, newCard)
                .then(function (data) {
                    newCard = data;
                    $scope.$emit('CardCreatedEvent', { card: newCard });
                    notifierService.success();
                })
                .catch(function (reason) {
                    notifierService.error(reason);
                });
        });
    }

})();