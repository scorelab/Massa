Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var CTKAdSettingsManager = _reactNative.NativeModules.CTKAdSettingsManager;
exports.default = {
  get currentDeviceHash() {
    return CTKAdSettingsManager.currentDeviceHash;
  },

  addTestDevice: function addTestDevice(deviceHash) {
    CTKAdSettingsManager.addTestDevice(deviceHash);
  },
  clearTestDevices: function clearTestDevices() {
    CTKAdSettingsManager.clearTestDevices();
  },
  setLogLevel: function setLogLevel(logLevel) {
    CTKAdSettingsManager.setLogLevel(logLevel);
  },
  setIsChildDirected: function setIsChildDirected(isDirected) {
    CTKAdSettingsManager.setIsChildDirected(isDirected);
  },
  setMediationService: function setMediationService(mediationService) {
    CTKAdSettingsManager.setMediationService(mediationService);
  },
  setUrlPrefix: function setUrlPrefix(urlPrefix) {
    CTKAdSettingsManager.setUrlPrefix(urlPrefix);
  }
};