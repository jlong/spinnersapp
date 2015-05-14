'use strict';

angular.module('spinnersApp', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/spinners.html',
      controller: 'SpinnersCtrl'
    })
    .when('/spinner/:spinner', {
      templateUrl: 'views/spinner-detail.html',
      controller: 'SpinnersDetailsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
})

;
