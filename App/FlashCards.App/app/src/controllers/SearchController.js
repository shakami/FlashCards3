(function () {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$scope', 'decks', 'cards'];

    function SearchController($scope, decks, cards) {
        $scope.decks = decks;
        $scope.cards = cards;
    }

})();