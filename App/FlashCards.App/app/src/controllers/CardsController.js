(function () {
    'use strict';

    angular
        .module('app')
        .controller('CardsController', CardsController);

    CardsController.$inject = ['$anchorScroll', 'cards', 'deck'];

    function CardsController($anchorScroll, cards, deck) {
        var vm = this;

        vm.deck = deck;
        vm.cards = cards;
        vm.newCard = { title: null, description: null };

        vm.scrollToAddNewCard = scrollToAddNewCard;

        function scrollToAddNewCard() {
            $('#createButton').click();

            $anchorScroll('createButton');
        }
    }

}());
