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
                fcId: '@',
                isFlashCard: '@'
            },
            controller: fcGenericCardController
        };
    }

    fcGenericCardController.$inject = ['$scope'];
    function fcGenericCardController($scope) {

        $scope.toggleEdit = toggleEdit;
        $scope.toggleShow = toggleShow;

        $scope.save = save;
        $scope.create = create;

        $scope.toggleDelete = toggleDelete;
        $scope.confirmDelete = confirmDelete;

        activate();

        function activate() {
            $scope.editing = false;
            $scope.showDescription = false;
            $scope.deleting = false;
            $scope.creating = $scope.fcId ? false : true;
            $scope.inputId = setInputId();

            setTitleAndText();

            activateTooltips();
        }

        function setInputId() {
            if ($scope.creating) {
                return 'createInput';
            } else if ($scope.isFlashCard) {
                return 'editCardInput' + $scope.fcId;
            } else {
                return 'editDeckInput' + $scope.fcId;
            }
        }

        function setTitleAndText() {
            $scope.originalTitle = angular.copy($scope.title);
            $scope.originalText = angular.copy($scope.text);
        }

        function resetTitleAndText() {
            $scope.title = $scope.originalTitle;
            $scope.text = $scope.originalText;
        }

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
            setTimeout(function () { $('#' + $scope.inputId).focus() }, 300);

            resetTitleAndText();

            $scope.editing = !$scope.editing;
        }

        function toggleDelete() {
            $scope.deleting = !$scope.deleting;
        }

        function save(form) {
            if (form.$valid) {
                $scope.$emit('EditEvent');

                $scope.editing = false;

                setTitleAndText();
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
