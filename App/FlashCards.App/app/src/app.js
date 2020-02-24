(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider
            //.when('/', {
            //    controller: 'HomeController',
            //    controllerAs: 'home',
            //    templateUrl: '/app/src/templates/home.html'
            //})
            .when('/decks', {
                controller: 'DecksController',
                controllerAs: 'vm',
                templateUrl: '/app/src/templates/decks.html'
            })
            .when('/decks/:deckId', {
                controller: 'CardsController',
                controllerAs: 'vm',
                templateUrl: '/app/src/templates/cards.html'
            })
            .otherwise('/decks');

    }]);
})();

