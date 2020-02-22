(function () {

    angular
        .module('app')
        .controller('DecksController', DecksController);

    DecksController.$inject = ['dataService'];

    function DecksController(dataService) {
        var vm = this;
        vm.decks = [];
        vm.createDeck = createDeck;

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

        function createDeck(deckName) {
            console.log('hi');
            return dataService.createDeck(deckName).then(function () {
                console.log('hi'); 
                return getDecks();
            })
        }

    }

}());