'use strict';

angular.module('spinnersApp', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/spinners/', {
      templateUrl: 'views/spinners.html',
      controller: 'SpinnersCtrl'
    })
    .when('/spinner/:spinner/', {
      templateUrl: 'views/spinner-detail.html',
      controller: 'SpinnersDetailsCtrl'
    })
    .otherwise({
      redirectTo: '/spinners'
    });
})

;
