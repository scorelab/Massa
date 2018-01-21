
'use strict';

var NativeModules = require('NativeModules');

var invariant = require('fbjs/lib/invariant');

var FrameRateLogger = {
  setGlobalOptions: function setGlobalOptions(options) {
    if (options.debug !== undefined) {
      invariant(NativeModules.FrameRateLogger, 'Trying to debug FrameRateLogger without the native module!');
    }
    NativeModules.FrameRateLogger && NativeModules.FrameRateLogger.setGlobalOptions(options);
  },

  setContext: function setContext(context) {
    NativeModules.FrameRateLogger && NativeModules.FrameRateLogger.setContext(context);
  },

  beginScroll: function beginScroll() {
    NativeModules.FrameRateLogger && NativeModules.FrameRateLogger.beginScroll();
  },
  endScroll: function endScroll() {
    NativeModules.FrameRateLogger && NativeModules.FrameRateLogger.endScroll();
  }
};

module.exports = FrameRateLogger;