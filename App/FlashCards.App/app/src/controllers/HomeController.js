(function () {

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;

        vm.header = 'Flash Cards Application';
    }

}());