(function () {

    angular.module('app')
        .factory('dataService', ['$http', '$q', dataService]);

    function dataService($http, $q) {

        return {
            getAllDecks: getAllDecks,
            getDeck: getDeck,
            createDeck: createDeck,
            editDeck: editDeck,
            deleteDeck: deleteDeck,

            getCardsInDeck: getCardsInDeck,
            createCard: createCard,
            editCard: editCard,
            deleteCard: deleteCard
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

        function createDeck(deck) {
            var req =
            {
                method: 'POST',
                url: 'https://localhost:44789/api/decks/',
                headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' },
                data: deck
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }

        function editDeck(deck) {
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

        function deleteDeck(deck) {
            var req =
            {
                method: 'DELETE',
                url: 'https://localhost:44789/api/decks/' + deck.id,
                headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache' }
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }

        function createCard(deckId, card) {
            var req =
            {
                method: 'POST',
                url: 'https://localhost:44789/api/decks/' + deckId + '/cards',
                headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' },
                data: card
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }

        function editCard(card) {
            var req =
            {
                method: 'PUT',
                url: 'https://localhost:44789/api/decks/' + card.deckId + '/cards/' + card.id,
                headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' },
                data: card
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }

        function deleteCard(card) {
            var req =
            {
                method: 'DELETE',
                url: 'https://localhost:44789/api/decks/' + card.deckId + '/cards/' + card.id,
                headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache'},
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