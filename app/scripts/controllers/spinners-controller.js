'use strict';

angular.module('spinnersappApp')
  .controller('SpinnersCtrl', function ($scope,Data) {

    $scope.spinners = Data.spinners();


  });
