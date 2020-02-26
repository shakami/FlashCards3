(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/decks', {
                controller: 'DecksController',
                controllerAs: 'vm',
                templateUrl: '/app/src/templates/decks.html',
                resolve: {
                    decks: function (dataService) {
                        return dataService.getAllDecks();
                    }
                }
            })
            .when('/decks/:deckId', {
                controller: 'CardsController',
                controllerAs: 'vm',
                templateUrl: '/app/src/templates/cards.html',
                resolve: {
                    deck: function (dataService, $route) {
                        return dataService.getDeck($route.current.params.deckId);
                    },
                    cards: function (dataService, $route) {
                        return dataService.getCardsInDeck($route.current.params.deckId);
                    }
                }
            })
            .when('/search/:searchPhrase', {
                templateUrl: '/app/src/templates/search.html',
                controller: 'SearchController',
                controllerAs: 'vm',
                resolve: {
                    decks: function (dataService) {
                        return dataService.getAllDecks();
                    },
                    cards: function (dataService) {
                        return dataService.getAllCards();
                    }
                }
            })
            .otherwise('/decks');
    }]);
})();

