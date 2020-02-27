(function () {
    'use strict';

    angular
        .module('app')
        .controller('DecksController', DecksController);

    DecksController.$inject = ['$anchorScroll', 'decks'];

    function DecksController($anchorScroll, decks) {
        var vm = this;

        vm.decks = decks;
        vm.newDeck = {};

        vm.scrollToAddNewDeck = scrollToAddNewDeck;

        function scrollToAddNewDeck() {
            $('#createButton').click();
            $anchorScroll('addNewDeck');
        }
    }

}());
