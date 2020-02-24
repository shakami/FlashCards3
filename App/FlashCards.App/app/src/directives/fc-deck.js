(function () {
    
    'use strict';
    
    angular
        .module('app')
        .directive('fcDeck', fcDeck);
    
    function fcDeck() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/Directives/fc-deck.html',
            scope: {
                deck: '=',
                editFunction: '&',
                deleteFunction: '&'
            }
        };
    }
    
    
})();