(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcCardHeader', fcCardHeader);

    function fcCardHeader() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/generic-card/fc-card-header.html',
            replace: true
        };
    }

})();