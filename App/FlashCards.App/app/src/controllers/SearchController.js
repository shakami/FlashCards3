(function () {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['decks', 'cards', '$rootScope'];

    function SearchController(decks, cards, $rootScope) {
        var vm = this;

        vm.decks = decks;
        vm.cards = cards;

        $rootScope.$on('DeleteEvent', function (e, args) {
            console.log('caught delete');
            // $rootScope.$broadcast('DeckDeleteEvent', args);
        });
        $rootScope.$on('EditEvent', function (e, args) {
            console.log('caught edit');
            // $rootScope.$broadcast('DeckDeleteEvent', args);
        });
    }

})();