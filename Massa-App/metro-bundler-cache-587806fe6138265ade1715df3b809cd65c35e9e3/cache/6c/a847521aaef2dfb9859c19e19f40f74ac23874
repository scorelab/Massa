
'use strict';

var RCTVibration = require('NativeModules').Vibration;

var invariant = require('fbjs/lib/invariant');

var VibrationIOS = {
  vibrate: function vibrate() {
    invariant(arguments[0] === undefined, 'Vibration patterns not supported.');
    RCTVibration.vibrate();
  }
};

module.exports = VibrationIOS;