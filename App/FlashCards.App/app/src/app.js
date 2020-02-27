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
                    decks: function (dataService, notifierService, $location) {
                        return dataService.getAllDecks()
                            .then(function (data) {
                                return data;
                            })
                            .catch(function (reason) {
                                notifierService.error(reason);
                                $location.path('/error');
                            });
                    }
                }
            })
            .when('/decks/:deckId', {
                controller: 'CardsController',
                controllerAs: 'vm',
                templateUrl: '/app/src/templates/cards.html',
                resolve: {
                    deck: function (dataService, $route, notifierService, $location) {
                        return dataService.getDeck($route.current.params.deckId)
                            .then(function (data) {
                                return data;
                            })
                            .catch(function (reason) {
                                notifierService.error(reason);
                                $location.path('/error');
                            });
                    },
                    cards: function (dataService, $route, notifierService, $location) {
                        return dataService.getCardsInDeck($route.current.params.deckId)
                            .then(function (data) {
                                return data;
                            })
                            .catch(function (reason) {
                                notifierService.error(reason);
                                $location.path('/error');
                            });
                    }
                }
            })
            .when('/search/:searchPhrase', {
                templateUrl: '/app/src/templates/search.html',
                controller: 'SearchController',
                controllerAs: 'vm',
                resolve: {
                    decks: function (dataService, notifierService, $location) {
                        return dataService.getAllDecks()
                            .then(function (data) {
                                return data;
                            })
                            .catch(function (reason) {
                                notifierService.error(reason);
                                $location.path('/error');
                            });
                    },
                    cards: function (dataService, notifierService, $location) {
                        return dataService.getAllCards()
                            .then(function (data) {
                                return data;
                            })
                            .catch(function (reason) {
                                notifierService.error(reason);
                                $location.path('/error');
                            });
                    }
                }
            })
            .when('/error', {
                templateUrl: '/app/src/templates/error.html'
            })
            .otherwise('/decks');
    }]);
})();
