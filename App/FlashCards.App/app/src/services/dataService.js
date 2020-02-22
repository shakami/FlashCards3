(function () {

    angular.module('app')
        .factory('dataService', ['$http', '$q', dataService]);

    function dataService($http, $q) {

        return {
            getAllDecks: getAllDecks,
            getDeck: getDeck,
            getCardsInDeck: getCardsInDeck
        };

        function getAllDecks() {
            var req =
            {
                method: 'GET',
                url: 'https://localhost:44789/api/decks',
                headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache' }
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }

        function getDeck(deckId) {
            var req =
            {
                method: 'GET',
                url: 'https://localhost:44789/api/decks/' + deckId,
                headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache' }
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }

        function getCardsInDeck(deckId) {
            var req =
            {
                method: 'GET',
                url: 'https://localhost:44789/api/decks/' + deckId + '/cards',
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
            return $q.reject('Error communicating with the server: ' + response.statusText);
        }

    }

}());