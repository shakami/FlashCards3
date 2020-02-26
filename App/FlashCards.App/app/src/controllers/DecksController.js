(function () {
    'use strict';

    angular
        .module('app')
        .controller('DecksController', DecksController);

    DecksController.$inject = ['dataService', '$anchorScroll', 'decks'];

    function DecksController(dataService, $anchorScroll, decks) {
        var vm = this;

        vm.decks = decks;
        vm.createDeck = createDeck;
        vm.editDeck = editDeck;
        vm.deleteDeck = deleteDeck;
        vm.newDeck = {};

        vm.scrollToAddNewDeck = scrollToAddNewDeck;

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

        function createDeck(deck) {
            return dataService.createDeck(deck).then(function () {
                vm.newDeck = {};
                getDecks();
            });
        }

        function editDeck(deck) {
            return dataService.editDeck(deck).then(function () {
                getDecks();
            });
        }

        function deleteDeck(deck) {
            return dataService.deleteDeck(deck).then(function () {
                getDecks();
            });
        }

        function scrollToAddNewDeck() {
            $('#createButton').click();
            $anchorScroll('addNewDeck');
        }
    }

}());