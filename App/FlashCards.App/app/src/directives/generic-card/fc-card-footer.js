(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcCardFooter', fcCardFooter);

    function fcCardFooter() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/generic-card/fc-card-footer.html',
            replace: true
        };
    }

})();
