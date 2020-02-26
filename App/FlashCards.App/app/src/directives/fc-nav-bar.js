(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcNavBar', fcNavBar);

    function fcNavBar() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/Directives/fc-nav-bar.html',
        };
    }

})();