(function () {

    angular
        .module('app')
        .controller('CardsController', CardsController);

    CardsController.$inject = ['$routeParams', 'dataService', '$anchorScroll'];

    function CardsController($routeParams, dataService, $anchorScroll) {
        var vm = this;

        vm.deck = {};
        vm.cards = [];
        vm.editCard = editCard;
        vm.deleteCard = deleteCard;
        vm.createCard = createCard;
        vm.newCard = { title: null, description: null };

        vm.deletingDeck = false;
        vm.toggleDeleteDeck = toggleDeleteDeck;

        vm.scrollToAddNewCard = scrollToAddNewCard;

        function scrollToAddNewCard() {
            $('#createButton').click();


            $anchorScroll('createButton');
        }

        activate();

        function activate() {
            var deckId = $routeParams.deckId;

            dataService.getDeck(deckId).then(function (data) {
                vm.deck = data;
                return vm.deck;
            });

            getCards(deckId);
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

        function toggleDeleteDeck() {
            vm.deletingDeck = !vm.deletingDeck;
        }
    }

}());