'use strict';

describe('Controller: SpinnersCtrl', function () {

  // load the controller's module
  beforeEach(module('spinnersApp'));

  var SpinnersCtrl,
      $scope
  ;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    SpinnersCtrl = $controller('SpinnersCtrl', { $scope: $scope });
  }));

  it('should attach a list of spinners to the scope', function () {
    expect($scope.spinners.length).toBeGreaterThan(0);
  });
});
