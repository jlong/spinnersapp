'use strict';

// the servicesModule is created in app.js

servicesModule.factory('Data', [function() {

  // initiate data

  this.hello = 'world';

  return this;

}]);