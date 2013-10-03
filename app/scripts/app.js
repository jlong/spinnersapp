'use strict';

angular.module('spinnersappApp', ['ngRoute','spinnersappApp.services'])
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
  });


var servicesModule = angular.module('spinnersappApp.services', []);