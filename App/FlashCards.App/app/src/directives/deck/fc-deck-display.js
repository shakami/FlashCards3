(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcDeckDisplay', fcDeckDisplay);

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

    fcDeckDisplayController.$inject = ['$scope', '$routeParams', 'searchService', '$timeout'];

    function fcDeckDisplayController($scope, $routeParams, searchService, $timeout) {

        activate();

        function activate() {
            var searchPhrase = $routeParams.searchPhrase;

            $timeout(function () {
                $scope.filteredDecks = searchService($scope.decks, searchPhrase);
            }, 500);
        }

        $scope.$on('searchEvent', function (e, args) {
            searchPhrase = args.searchPhrase;
            $scope.filteredDecks = searchService($scope.decks, searchPhrase);
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
