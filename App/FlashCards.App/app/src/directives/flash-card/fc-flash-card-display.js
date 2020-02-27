(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcFlashCardDisplay', fcFlashCardDisplay);

    function fcFlashCardDisplay() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/flash-card/fc-flash-card-display.html',
            transclude: true,
            scope: {
                cards: '='
            },
            controller: fcFlashCardDisplayController
        };
    }

    fcFlashCardDisplayController.$inject = ['$scope', '$routeParams', 'searchService', '$timeout'];
    function fcFlashCardDisplayController($scope, $routeParams, searchService, $timeout) {
        activate();

        function activate() {
            var searchPhrase = $routeParams.searchPhrase;

            $timeout(function () {
                $scope.filteredCards = searchService($scope.cards, searchPhrase);
            }, 500);
        }

        $scope.$on('searchEvent', function (e, args) {
            searchPhrase = args.searchPhrase;
            $scope.filteredCards = searchService($scope.cards, searchPhrase);
        });

        $scope.$on('CardDeletedEvent', function (e, args) {
            e.stopPropagation();
            var index = $scope.cards.indexOf(args.card);
            $scope.cards.splice(index, 1);
        });

        $scope.$on('CardCreatedEvent', function (e, args) {
            e.stopPropagation();
            $scope.cards.push(args.card);
        });
    }

})();
