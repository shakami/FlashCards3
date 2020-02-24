(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcDeck', fcDeck)

    fcDeck.$inject = [];
    function fcDeck() {

        var directive = {
            replace: true,
            scope: {
                deck: '=',
                new: '@',
                deckCreateFunction: '&method',
                deckDeleteFunction: '&'
            },
            templateUrl: '/app/src/directives/fc-deck.html',
            restrict: 'E',
            controller: function ($scope) {
                var vm = $scope;
                $scope.editing = false;
                $scope.toggleEdit = function () { $scope.editing = !$scope.editing };

                $scope.createDeck = function () {
                    $scope.deckCreateFunction($scope.newDeck);
                    $scope.newDeck = {};
                    $scope.toggleEdit();
                };

                $scope.deleteDeck = function () {
                    $scope.deckDeleteFunction();
                }
            }
        };
        return directive;
    }

})();