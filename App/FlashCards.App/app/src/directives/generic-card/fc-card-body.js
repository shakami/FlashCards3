(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcCardBody', fcCardBody);

    function fcCardBody() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/generic-card/fc-card-body.html',
            replace: true
        };
    }

})();
