(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcSpinner', fcSpinner);

    function fcSpinner() {
        return {
            restrict: 'C',
            templateUrl: 'app/src/directives/layout/fc-spinner.html'
        }
    }

})();