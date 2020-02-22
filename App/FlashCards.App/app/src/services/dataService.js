(function () {

    angular.module('app')
        .factory('dataService', ['$http', '$q', dataService]);

    function dataService($http, $q) {

        return {
            getAllDecks: getAllDecks,
            getDeck: getDeck,
            getCardsInDeck: getCardsInDeck,

            createDeck: createDeck,
            renameDeck: renameDeck
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

        function createDeck(deckName) {
            var req =
            {
                method: 'POST',
                url: 'https://localhost:44789/api/decks/',
                headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' },
                data: { name: deckName }
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }

        function renameDeck(deck) {
            var req =
            {
                method: 'PUT',
                url: 'https://localhost:44789/api/decks/' + deck.id,
                headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' },
                data: deck
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