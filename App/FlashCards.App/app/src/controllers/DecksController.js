(function () {
    'use strict';

    angular
        .module('app')
        .controller('DecksController', DecksController);

    DecksController.$inject = ['dataService', '$anchorScroll', 'decks', 'notifierService'];

    function DecksController(dataService, $anchorScroll, decks, notifierService) {
        var vm = this;

        vm.decks = decks;
        vm.createDeck = createDeck;
        vm.newDeck = {};

        vm.scrollToAddNewDeck = scrollToAddNewDeck;

        function createDeck(deck) {
            return dataService.createDeck(deck)
                .then(function () {
                    vm.newDeck = {};
                    getDecks();
                })
                .catch(function (reason) {
                    console.log(reason);
                    notifierService.error(reason);
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