(function () {

    'use strict';

    angular
        .module('app')
        .directive('fcFlashCardCreate', fcFlashCardCreate);

    function fcFlashCardCreate() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/Directives/fc-flash-card-create.html',
            scope: {
                card: '=',
                saveFunction: '&'
            }
        };
    }

})();