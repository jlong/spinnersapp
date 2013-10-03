'use strict';

// the servicesModule is created in app.js

servicesModule.factory('Data', [function() {


  // UUID helper functions
  var s4 = function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  var guid = function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  

  this.spinner = function (id) {
    for (var i = 0; i < spinners.length; i++) {
      if (spinners[i].id == id) {
        return spinners[i];
      }
    }
  }

  this.spinners = function () {
    return spinners;
  }

  // initiate data

  var spinners = [
    {
      id: "spinner",
      name: "Spinner",
      className: "spinner",
      description: "Spinning circles",
      cssURL: "https://rawgithub.com/jlong/spinners/master/css/spinner/spinner.css",
      rawsass: "coming sooner!",
      rawcss: "loading"
    },
    {
      id: "throbber",
      name: "Throbber",
      className: "throbber",
      description: "Animated Facebook-like throbber.",
      cssURL: "https://rawgithub.com/jlong/spinners/master/css/spinner/throbber.css",
      rawsass: "coming sooner!",
      rawcss: "loading"
    },
    {
      id: "refreshing",
      name: "Refreshing",
      className: "refreshing",
      description: "Circular spinning arrow. Great for refreshing content.",
      cssURL: "https://rawgithub.com/jlong/spinners/master/css/spinner/refreshing.css",
      rawsass: "coming sooner!",
      rawcss: "loading"
    },
    {
      id: "heartbeat",
      name: "Heartbeat",
      className: "heartbeat",
      description: "Animated beating heart.",
      cssURL: "https://rawgithub.com/jlong/spinners/master/css/spinner/heartbeat.css",
      sass: "coming sooner!",
      rawcss: "loading"
    },
    {
      id: "gauge",
      name: "Gauge",
      className: "gauge",
      description: "Animated speedometer-like gauge with rotating needle.",
      cssURL: "https://rawgithub.com/jlong/spinners/master/css/spinner/gauge.css",
      rawsass: "coming sooner!",
      rawcss: "loading"
    },
    {
      id: "timer",
      name: "Timer",
      className: "timer",
      description: "Animated clock with spinning hands.",
      cssURL: "https://rawgithub.com/jlong/spinners/master/css/spinner/timer.css",
      rawsass: "coming sooner!",
      rawcss: "loading"
    }
  ];

  

  return this;

}]);