(function () {
    'use strict';

    angular
        .module('app')
        .directive('fcGenericCard', fcGenericCard);

    function fcGenericCard() {
        return {
            restrict: 'E',
            templateUrl: 'app/src/directives/generic-card/fc-generic-card.html',
            scope: {
                title: '=',
                text: '=',
                id: '@',
                isFlashCard: '@'
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
        $scope.create = create;

        $scope.deleting = false;
        $scope.toggleDelete = toggleDelete;
        $scope.confirmDelete = confirmDelete;

        $scope.creating = $scope.id ? false : true;

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
            if ($scope.creating) {
                setTimeout(function () { $('#createInput').focus() }, 300);
            } else {
                setTimeout(function () { $('#editTitleInput' + $scope.id).focus() }, 300);
            }

            $scope.title = $scope.originalTitle;
            $scope.text = $scope.originalText;
            $scope.editing = !$scope.editing;
        }

        function toggleDelete() {
            $scope.deleting = !$scope.deleting;
        }

        function save(form) {
            if (form.$valid) {
                $scope.$emit('EditEvent');
                $scope.editing = false;
            }
        }

        function create(form) {
            if (form.$valid) {
                $scope.$emit('CreateEvent', { title: $scope.title, text: $scope.text });
                $scope.editing = false;
            }
        }

        function confirmDelete() {
            $scope.$emit('DeleteEvent');
        }
    }

})();