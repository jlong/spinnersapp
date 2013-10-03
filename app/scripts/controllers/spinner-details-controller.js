'use strict';

angular.module('spinnersappApp')
  .controller('SpinnersDetailsCtrl', function ($scope,Data,$routeParams) {

    $scope.spinner = Data.spinner($routeParams.spinner);

  });
