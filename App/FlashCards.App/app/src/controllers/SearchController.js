(function () {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['decks', 'cards'];

    function SearchController(decks, cards) {
        var vm = this;

        vm.decks = decks;
        vm.cards = cards;
    }

})();