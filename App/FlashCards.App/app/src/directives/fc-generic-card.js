(function () {
    'use strict';
    
    angular
        .module('app')
        .directive('fcGenericCard', fcGenericCard);
    
    function fcGenericCard() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/Directives/fc-generic-card.html',
            scope: {
                title: '=',
                text: '=',
                link: '@',
                flashCardId: '@',
                editFunction: '&',
                deleteFunction: '&'
            },
            controller: fcGenericCardController,
            controllerAs: 'vm'
        };
    }
    
    
    fcGenericCardController.$inject = ['$scope'];
    function fcGenericCardController($scope) {
        
        $scope.editing = false;
        $scope.toggleEdit = toggleEdit;
        $scope.originalTitle = angular.copy($scope.title);
        $scope.originalText = angular.copy($scope.text);
        
        $scope.showDescription = false;
        $scope.toggleShow = toggleShow;
        
        $scope.save = save;

        $scope.deleting = false;
        $scope.toggleDelete = toggleDelete;
        $scope.confirmDelete = confirmDelete;

        activateTooltips();

        function activateTooltips() {
            return $(function () {
                $('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });
                $('[data-toggle="tooltip"]').on('click', function () {
                    $(this).tooltip('hide');
                });
            });
        }

        function toggleShow() {
            $scope.showDescription = !$scope.showDescription;
        }
        
        function toggleEdit() {
            $scope.title = $scope.originalTitle;
            $scope.text = $scope.originalText;
            $scope.editing = !$scope.editing;
        }

        function toggleDelete() {
            $scope.deleting = !$scope.deleting;
        }

        function save(form) {
            if (form.$valid) {
                $scope.editFunction();
                $scope.editing = false;
            }
        }

        function confirmDelete() {
            $scope.deleteFunction();
            $scope.editing = false;
        }
    }
    
})();