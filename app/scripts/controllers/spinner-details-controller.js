'use strict';

angular.module('spinnersApp')
  .controller('SpinnersDetailsCtrl', function ($scope,Data,$routeParams) {

    $scope.spinner = Data.spinner($routeParams.spinner);

    $scope.prevSpinner = Data.spinner($routeParams.spinner,'next');

    $scope.nextSpinner = Data.spinner($routeParams.spinner,'prev');

  });
