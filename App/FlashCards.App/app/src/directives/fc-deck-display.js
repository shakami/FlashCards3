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

                $scope.editDeck = function (deck) {
                    $scope.editFunction({ deck: deck });
                }
                $scope.deleteDeck = function (deck) {
                    $scope.deleteFunction({ deck: deck })
                }
            },
            transclude: true,
            scope: {
                decks: '=',
                editFunction: '&',
                deleteFunction: '&'
            }
        }
    }

})();