(function () {
    
    'use strict';
    
    
    
    angular
        .module('app')
        .directive('fcGenericCard', fcGenericCard);
    
    function fcGenericCard() {
        return {
            restrict: 'E',
            transclude: true,
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
        
        $scope.showDescription = false;
        $scope.toggleShow = toggleShow;
        
        $scope.save = save;
        $scope.startDelete = startDelete;
        
        activateTooltips();
        
        function activateTooltips() {
            return $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            });
        }
        
        function toggleShow() {
            $scope.showDescription = !$scope.showDescription;
        }
        
        function toggleEdit() {
            $scope.editing = !$scope.editing;
        }
        
        function save() {
            $scope.editFunction();
            $scope.editing = false;
        }
        
        function startDelete() {
            $scope.deleteFunction();
            $scope.editing = false;
        }
    }
    
})();