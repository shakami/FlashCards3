(function () {
    'use strict';

    angular
        .module('app')
        .factory('deckManipulationService', ['dataService', deckManipulationService]);

    function deckManipulationService(dataService) {

        return {
            editDeck: editDeck,
            deleteDeck: deleteDeck,
        };

        function editDeck(deck) {
            return dataService.editDeck(deck).then(function () {
                return 
            }
        }

        function deleteDeck(deckId) {
            var req =
            {
                method: 'DELETE',
                url: 'https://localhost:44789/api/decks/' + deckId,
                headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache' }
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }

        function sendResponseData(response) {
            return response.data;
        }

        function sendError(response) {
            return $q.reject(response);
        }

    }

}());