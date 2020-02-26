(function () {
    'use strict';

    angular
        .module('app')
        .config(httpConfig)
        .constant('API_URL', 'https://localhost:44789/api/decks/')
        .factory('dataService', ['$http', '$q', 'API_URL', dataService]);

    function dataService($http, $q, API_URL) {

        return {
            getAllDecks: getAllDecks,
            getDeck: getDeck,
            createDeck: createDeck,
            editDeck: editDeck,
            deleteDeck: deleteDeck,

            getAllCards: getAllCards,
            getCardsInDeck: getCardsInDeck,
            createCard: createCard,
            editCard: editCard,
            deleteCard: deleteCard
        };

        function getAllDecks() {
            console.log(API_URL);

            var req =
            {
                method: 'GET',
                url: API_URL,
                headers: { 'Accept': 'application/json' }
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }

        function getDeck(deckId) {
            var req =
            {
                method: 'GET',
                url: API_URL + deckId,
                headers: { 'Accept': 'application/json' }
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }

        function getAllCards() {
            var cards = [];

            return getAllDecks().then(function (decks) {
                angular.forEach(decks, function (deck) {
                    getCardsInDeck(deck.id).then(function (data) {
                        angular.forEach(data, function (card) {
                            cards.push(card);
                        });
                    });
                });
                return cards;
            });
        }

        function getCardsInDeck(deckId) {
            var req =
            {
                method: 'GET',
                url: API_URL + deckId + '/cards',
                headers: { 'Accept': 'application/json' }
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }

        function createDeck(deck) {
            var req =
            {
                method: 'POST',
                url: API_URL,
                headers: { 'Accept': 'application/json' },
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
                url: API_URL + deck.id,
                headers: { 'Accept': 'application/json' },
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
                url: API_URL + deck.id,
                headers: { 'Accept': 'application/json' }
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }

        function createCard(deckId, card) {
            var req =
            {
                method: 'POST',
                url: API_URL + deckId + '/cards',
                headers: { 'Accept': 'application/json' },
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
                url: API_URL + card.deckId + '/cards/' + card.id,
                headers: { 'Accept': 'application/json' },
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
                url: API_URL + card.deckId + '/cards/' + card.id,
                headers: { 'Accept': 'application/json' },
            };

            return $http(req)
                .then(sendResponseData)
                .catch(sendError);
        }


        function sendResponseData(response) {
            return response.data;
        }

        function sendError(response) {
            return $q.reject(response.status);
        }

    }

    function httpConfig($httpProvider) {
        $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json';
    }

}());