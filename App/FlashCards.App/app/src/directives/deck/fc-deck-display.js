(function () {
    'use strict';

    angular.module('app').directive('fcDeckDisplay', fcDeckDisplay);

    function fcDeckDisplay() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                decks: '='
            },
            templateUrl: 'app/src/directives/deck/fc-deck-display.html',
            controller: fcDeckDisplayController
        };
    }

    fcDeckDisplayController.$inject = ['$scope', '$routeParams'];

    function fcDeckDisplayController($scope, $routeParams) {
        $scope.searchPhrase = $routeParams.searchPhrase;
        $scope.$on('searchEvent', function (e, args) {
            $scope.searchPhrase = args.searchPhrase;
        });
        $scope.$on('DeckDeletedEvent', function (e, args) {
            e.stopPropagation();
            var index = $scope.decks.indexOf(args.deck);
            $scope.decks.splice(index, 1);
        });
        $scope.$on('DeckCreatedEvent', function (e, args) {
            e.stopPropagation();
            $scope.decks.push(args.deck);
        });
    }

})();