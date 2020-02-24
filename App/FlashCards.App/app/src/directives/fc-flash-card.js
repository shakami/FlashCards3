(function () {
    
    'use strict';
    
    angular
        .module('app')
        .directive('fcFlashCard', fcFlashCard);
    
    function fcFlashCard() {
        return {
          restrict: 'E',
            templateUrl: 'app/src/Directives/fc-flash-card.html',
            scope: {
                card: '=',
                editFunction: '&',
                deleteFunction: '&'
            }  
        };
    }
    
    
})();