

'use strict';

var BackHandler = require('BackHandler');

var warning = require('fbjs/lib/warning');

var BackAndroid = {

  exitApp: function exitApp() {
    warning(false, 'BackAndroid is deprecated.  Please use BackHandler instead.');
    BackHandler.exitApp();
  },

  addEventListener: function addEventListener(eventName, handler) {
    warning(false, 'BackAndroid is deprecated.  Please use BackHandler instead.');
    return BackHandler.addEventListener(eventName, handler);
  },

  removeEventListener: function removeEventListener(eventName, handler) {
    warning(false, 'BackAndroid is deprecated.  Please use BackHandler instead.');
    BackHandler.removeEventListener(eventName, handler);
  }

};

module.exports = BackAndroid;