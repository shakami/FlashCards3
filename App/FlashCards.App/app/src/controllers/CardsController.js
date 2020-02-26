(function () {
    'use strict';

    angular
        .module('app')
        .controller('CardsController', CardsController);

    CardsController.$inject = ['$routeParams', 'dataService', '$anchorScroll', '$scope', 'cards', 'deck'];

    function CardsController($routeParams, dataService, $anchorScroll, $scope, cards, deck) {
        var vm = this;

        vm.deck = deck;
        vm.cards = cards;
        vm.editCard = editCard;
        vm.deleteCard = deleteCard;
        vm.createCard = createCard;
        vm.newCard = { title: null, description: null };

        vm.scrollToAddNewCard = scrollToAddNewCard;

        // activate();

        function activate() {

            if ($routeParams.searchPhrase) {
                vm.searchPhrase = $routeParams.searchPhrase;
                //dataService.getAllCards().then(function (data) {
                //    console.log(data);
                //    vm.cards = data;
                //    return vm.cards;
                //});
            } else {
                var deckId = $routeParams.deckId;

                dataService.getDeck(deckId).then(function (data) {
                    vm.deck = data;
                    return vm.deck;
                });

                getCards(deckId);
            }
            $scope.$on('searchEvent', function (e, args) {
                vm.searchPhrase = args.searchPhrase;
            });

        }

        function getCards(deckId) {
            dataService.getCardsInDeck(deckId).then(function (data) {
                vm.cards = data;
                return vm.cards;
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

        function scrollToAddNewCard() {
            $('#createButton').click();

            $anchorScroll('createButton');
        }
    }

}());