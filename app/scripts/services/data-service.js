'use strict';

// the servicesModule is created in app.js

servicesModule.factory('Data', [function() {


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
      description: "Spinning circles"
    },
    {
      id: "throbber",
      name: "Throbber",
      description: "Animated Facebook-like throbber."
    },
    {
      id: "refreshing",
      name: "Refreshing",
      description: "Circular spinning arrow. Great for refreshing content."
    },
    {
      id: "heartbeat",
      name: "Heartbeat",
      description: "Animated beating heart."
    },
    {
      id: "gauge",
      name: "Gauge",
      description: "Animated speedometer-like gauge with rotating needle."
    },
    {
      id: "timer",
      name: "Timer",
      description: "Animated clock with spinning hands."
    },
    {
      id: "three-quarters",
      name: "Three Quarters",
      description: "Minimal three-quarters donut spinner."
    },
    {
      id: "wobblebar",
      name: "Wobblebar",
      description: "Animated wobbling progress bar."
    },
    {
      id: "atebits",
      name: "Atebits",
      description: "Staight out of Letterpress, an animated rotating Atebits logo."
    },
    {
      id: "whirly",
      name: "Whirly",
      description: "A comet-like rotating spinner."
    },
    {
      id: "flower",
      name: "Flower",
      description: "An animated spinning flower."
    },
    {
      id: "dots",
      name: "Dots",
      description: "Almost a rotating shell game. With dots!"
    },
    {
      id: "circles",
      name: "Circles",
      description: "Three rotating multi-colored circles."
    },
    {
      id: "plus",
      name: "Plus",
      description: "Animated Google Plus-like loader."
    },
    {
      id: "ball",
      name: "Ball",
      description: "ball..."
    }
  ];

  return this;

}]);