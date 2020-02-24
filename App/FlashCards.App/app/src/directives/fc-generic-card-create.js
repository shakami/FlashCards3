(function () {

    'use strict';

    angular
        .module('app')
        .directive('fcGenericCardCreate', fcGenericCardCreate);

    function fcGenericCardCreate() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/Directives/fc-generic-card-create.html',
            scope: {
                title: '=',
                text: '=',
                isFlashCard: '@',
                saveFunction: '&'
            },
            controller: fcGenericCardCreateController,
            controllerAs: 'vm'
        };
    }


    fcGenericCardCreateController.$inject = ['$scope'];
    function fcGenericCardCreateController($scope) {

        $scope.editing = false;
        $scope.toggleEdit = toggleEdit;

        $scope.save = save;

        activateTooltips();

        function activateTooltips() {
            return $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            });
        }

        function toggleEdit() {
            $scope.editing = !$scope.editing;
        }

        function save() {
            $scope.saveFunction();
            $scope.editing = false;
        }
    }

})();