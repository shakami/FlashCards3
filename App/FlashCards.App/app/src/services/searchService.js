(function () {
    'use strict';

    angular
        .module('app')
        .factory('searchService', searchService);

    searchService.$inject = ['filterFilter'];

    function searchService(filterFilter) {
        return function (array, searchPhrase) {
            return filterFilter(array, searchPhrase);
        };
    }

})();
