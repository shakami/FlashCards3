(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcCardEdit', fcCardEdit);

    function fcCardEdit() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/generic-card/fc-card-edit.html',
            replace: true
        };
    }

})();
