(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcDeckCreate', fcDeckCreate);

    function fcDeckCreate() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/Directives/fc-deck-create.html',
            scope: {
                deck: '=',
                saveFunction: '&',
            }
        };
    }

})();