(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcNavBar', fcNavBar);

    function fcNavBar() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/layout/fc-nav-bar.html',
        };
    }

})();