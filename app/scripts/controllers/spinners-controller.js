'use strict';

angular.module('spinnersApp')

.controller('SpinnersCtrl', function ($scope,Data) {
  $scope.spinners = Data.spinners();
});
