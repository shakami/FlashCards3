(function () {

    angular
        .module('app')
        .controller('DecksController', DecksController);

    DecksController.$inject = ['dataService', '$anchorScroll', '$scope'];

    function DecksController(dataService, $anchorScroll, $scope) {
        var vm = this;
        vm.decks = [];
        vm.createDeck = createDeck;
        vm.editDeck = editDeck;
        vm.deleteDeck = deleteDeck;
        vm.newDeck = {};

        vm.scrollToAddNewDeck = scrollToAddNewDeck;

        $scope.$on('searchEvent', function (e, args) {
            vm.searchPhrase = args.searchPhrase;
        });

        function scrollToAddNewDeck() {
            $('#createButton').click();
            $anchorScroll('addNewDeck');
        }


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

        
        function createDeck(deck) {
            return dataService.createDeck(deck)
                .then(function () {
                    vm.newDeck = {};
                    return getDecks();
                })
                .catch(function (response) {
                    if (response.status == '422') { // validation error

                    }

                    console.log('error: ' + response);
                });
        }

        function editDeck(deck) {
            return dataService.editDeck(deck).then(function () {
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