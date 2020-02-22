(function () {

    angular
        .module('app')
        .controller('DecksController', DecksController);

    DecksController.$inject = ['dataService'];

    function DecksController(dataService) {
        var vm = this;
        vm.decks = [];
        vm.editing = false;
        vm.edit = edit;

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

        function edit() {
            vm.editing = !vm.editing;
        }

    }

}());