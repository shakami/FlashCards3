(function () {
    'use strict';

    angular
        .module('app')
        .controller('CardsController', CardsController);

    CardsController.$inject = ['dataService', '$anchorScroll', 'cards', 'deck', '$scope'];

    function CardsController(dataService, $anchorScroll, cards, deck, $scope) {
        var vm = this;

        vm.deck = deck;
        vm.cards = cards;
        vm.editCard = editCard;
        vm.deleteCard = deleteCard;
        vm.createCard = createCard;
        vm.newCard = { title: null, description: null };

        vm.scrollToAddNewCard = scrollToAddNewCard;

        activate();

        function activate() {
            $scope.$on('CardDeleteEvent', function (e, args) {
                deleteCard(args.card);
            });
            $scope.$on('CardEditEvent', function (e, args) {
                editCard(args.card);
            });
        }

        function editCard(card) {
            return dataService.editCard(card).then(function () {
                return getCards(vm.deck.id);
            });
        }

        function deleteCard(card) {
            return dataService.deleteCard(card).then(function () {
                return getCards(vm.deck.id);
            });
        }

        function createCard(card) {
            return dataService.createCard(vm.deck.id, card).then(function () {
                vm.newCard = {};
                return getCards(vm.deck.id);
            });
        }

        function getCards(deckId) {
            dataService.getCardsInDeck(deckId).then(function (data) {
                vm.cards = data;
                return vm.cards;
            });
        }

        function scrollToAddNewCard() {
            $('#createButton').click();

            $anchorScroll('createButton');
        }
    }

}());