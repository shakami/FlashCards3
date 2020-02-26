(function () {
    'use strict';

    angular
        .module('app')
        .controller('DecksController', DecksController);

    DecksController.$inject = ['dataService', '$anchorScroll', 'decks', '$scope'];

    function DecksController(dataService, $anchorScroll, decks) {
        var vm = this;

        vm.decks = decks;
        vm.createDeck = createDeck;
        vm.newDeck = {};

        vm.scrollToAddNewDeck = scrollToAddNewDeck;

        function createDeck(deck) {
            return dataService.createDeck(deck).then(function () {
                vm.newDeck = {};
                getDecks();
            });
        }

        function getDecks() {
            return dataService.getAllDecks()
                .then(function (data) {
                    vm.decks = data;
                    return vm.decks;
                })
                .catch(function (data) {
                    console.log('messed up');
                });
        }

        function scrollToAddNewDeck() {
            $('#createButton').click();
            $anchorScroll('addNewDeck');
        }
    }

}());