(function () {
    'use strict';

    angular.module('app').directive('fcDeckDisplay', fcDeckDisplay);

    function fcDeckDisplay() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/fc-deck-display.html',
            controller: function ($scope, $routeParams) {
                $scope.searchPhrase = $routeParams.searchPhrase;
                $scope.$on('searchEvent', function (e, args) {
                    $scope.searchPhrase = args.searchPhrase;
                });
                $scope.$on('DeckDeleted', function (e, args) {
                    e.stopPropagation();
                    var index = $scope.decks.indexOf(args.deck);
                    $scope.decks.splice(index, 1);
                });
            },
            transclude: true,
            scope: {
                decks: '='
            }
        }
    }

})();