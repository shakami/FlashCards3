(function () {
    'use strict';

    angular
        .module('app')
        .constant('toastr', toastr)
        .config(toastrConfig)
        .factory('notifierService', ['toastr', notifierService]);

    function notifierService(toastr) {
        return {
            success: notifySuccess,
            error: notifyError,
            warning: notifyWarning,
            info: notifyInfo
        };

        function notifySuccess() {
            toastr.success('All changes saved.', 'Success!');
        }

        function notifyError(reason) {
            toastr.error('Could NOT save changes to the server. ' + reason, 'Error!');
        }

        function notifyWarning(message) {
            toastr.warning(message, 'Warning');
        }

        function notifyInfo(message) {
            toastr.info(message);
        }
    }

    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
        toastr.options.closeButton = true;
    }

})();