(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcCardBodyEdit', fcCardBodyEdit);

    function fcCardBodyEdit() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/generic-card/fc-card-body-edit.html',
            replace: true
        };
    }

})();