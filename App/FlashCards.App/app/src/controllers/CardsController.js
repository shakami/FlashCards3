(function () {

    angular
        .module('app')
        .controller('CardsController', CardsController);

    CardsController.$inject = ['$routeParams', 'dataService'];

    function CardsController($routeParams, dataService) {
        var vm = this;
        
        vm.deck = {};
        vm.cards = [];

        activate();

        function activate() {
            var deckId = $routeParams.deckId;

            dataService.getDeck(deckId).then(function (data) {
                vm.deck = data;
                return vm.deck;
            });

            dataService.getCardsInDeck(deckId).then(function (data) {
                vm.cards = data;
                return vm.cards;
            });  
        }
    }

}());