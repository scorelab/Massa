Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _fbemitter = require('fbemitter');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CTKNativeAdManager = _reactNative.NativeModules.CTKNativeAdManager,
    CTKNativeAdEmitter = _reactNative.NativeModules.CTKNativeAdEmitter;


var nativeAdEmitter = new _reactNative.NativeEventEmitter(CTKNativeAdEmitter);

var EVENT_DID_BECOME_VALID = 'AdsManagerDidBecomeValid';

var NativeAdsManager = function () {
  function NativeAdsManager(placementId) {
    var adsToRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, NativeAdsManager);

    this.isValid = false;
    this.eventEmitter = new _fbemitter.EventEmitter();

    this.placementId = placementId;
    this.adsToRequest = adsToRequest;

    this._listenForStateChanges();

    CTKNativeAdManager.init(placementId, adsToRequest);
  }

  _createClass(NativeAdsManager, [{
    key: '_listenForStateChanges',
    value: function _listenForStateChanges() {
      var _this = this;

      nativeAdEmitter.addListener('CTKNativeAdsManagersChanged', function (managers) {
        var isValidNew = managers[_this.placementId];
        var isValid = _this.isValid;

        if (isValid !== isValidNew && isValidNew) {
          _this.isValid = true;
          _this.eventEmitter.emit(EVENT_DID_BECOME_VALID);
        }
      });
    }
  }, {
    key: 'onAdsLoaded',
    value: function onAdsLoaded(func) {
      if (this.isValid) {
        setTimeout(func);
        return {
          remove: function remove() {}
        };
      }

      return this.eventEmitter.once(EVENT_DID_BECOME_VALID, func);
    }
  }, {
    key: 'disableAutoRefresh',
    value: function disableAutoRefresh() {
      CTKNativeAdManager.disableAutoRefresh(this.placementId);
    }
  }, {
    key: 'setMediaCachePolicy',
    value: function setMediaCachePolicy(cachePolicy) {
      CTKNativeAdManager.setMediaCachePolicy(this.placementId, cachePolicy);
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.placementId;
    }
  }]);

  return NativeAdsManager;
}();

exports.default = NativeAdsManager;