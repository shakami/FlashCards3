(function () {

    angular
        .module('app')
        .controller('DecksController', DecksController);

    DecksController.$inject = ['dataService'];

    function DecksController(dataService) {
        var vm = this;
        vm.decks = [];
        vm.createDeck = createDeck;
        vm.editDeck = editDeck;
        vm.deleteDeck = deleteDeck;

        activate();

        function activate() {
            return getDecks();
        }

        function getDecks() {
            return dataService.getAllDecks().then(function (data) {
                vm.decks = data;
                return vm.decks;
            });
        }

        function createDeck(name) {
            return dataService.createDeck(name).then(function () {
                return getDecks();
            });
        }

        function editDeck(deck) {
            return dataService.renameDeck(deck).then(function () {
                return getDecks();
            });
        }

        function deleteDeck(deck) {
            return dataService.deleteDeck(deck).then(function () {
                return getDecks();
            });
        }

    }

}());