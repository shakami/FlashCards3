(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcFooter', fcFooter);

    function fcFooter() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/layout/fc-footer.html',
            controller: function ($scope) {
                $scope.year = new Date().getFullYear();
            }
        };
    }

})();

