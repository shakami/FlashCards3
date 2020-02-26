(function () {
    'use strict';

    angular
        .module('app')
        .controller('DecksController', DecksController);

    DecksController.$inject = ['dataService', '$anchorScroll', 'decks', '$scope'];

    function DecksController(dataService, $anchorScroll, decks, $scope) {
        var vm = this;

        vm.decks = decks;
        vm.createDeck = createDeck;
        vm.editDeck = editDeck;
        vm.deleteDeck = deleteDeck;
        vm.newDeck = {};

        vm.scrollToAddNewDeck = scrollToAddNewDeck;

        activate();

        function activate() {
            $scope.$on('DeckDeleteEvent', function (e, args) {
                deleteDeck(args.deck.id);
            });
            $scope.$on('DeckEditEvent', function (e, args) {
                editDeck(args.deck);
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

        function deleteDeck(deckId) {
            return dataService.deleteDeck(deckId).then(function () {
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