Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Branch = exports.ShareInitiatedEvent = exports.ShareCompletedEvent = exports.RegisterViewEvent = exports.PurchaseInitiatedEvent = exports.PurchasedEvent = exports.AddToWishlistEvent = exports.AddToCartEvent = exports.DEFAULT_INIT_SESSION_TTL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _branchUniversalObject = require('./branchUniversalObject');

var _branchUniversalObject2 = _interopRequireDefault(_branchUniversalObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RNBranch = _reactNative.NativeModules.RNBranch,
    RNBranchEventEmitter = _reactNative.NativeModules.RNBranchEventEmitter;
var DEFAULT_INIT_SESSION_TTL = exports.DEFAULT_INIT_SESSION_TTL = 5000;

var AddToCartEvent = exports.AddToCartEvent = RNBranch.ADD_TO_CART_EVENT;
var AddToWishlistEvent = exports.AddToWishlistEvent = RNBranch.ADD_TO_WISHLIST_EVENT;
var PurchasedEvent = exports.PurchasedEvent = RNBranch.PURCHASED_EVENT;
var PurchaseInitiatedEvent = exports.PurchaseInitiatedEvent = RNBranch.PURCHASE_INITIATED_EVENT;
var RegisterViewEvent = exports.RegisterViewEvent = RNBranch.REGISTER_VIEW_EVENT;
var ShareCompletedEvent = exports.ShareCompletedEvent = RNBranch.SHARE_COMPLETED_EVENT;
var ShareInitiatedEvent = exports.ShareInitiatedEvent = RNBranch.SHARE_INITIATED_EVENT;

var Branch = function () {
  function Branch() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Branch);

    this.nativeEventEmitter = _reactNative.Platform.select({
      android: _reactNative.DeviceEventEmitter,
      ios: new _reactNative.NativeEventEmitter(RNBranchEventEmitter)
    });
    this.initSessionTtl = DEFAULT_INIT_SESSION_TTL;
    this._launchTime = new Date().getTime();
    this._debug = false;
    this.setDebug = RNBranch.setDebug;
    this.getLatestReferringParams = RNBranch.getLatestReferringParams;
    this.getFirstReferringParams = RNBranch.getFirstReferringParams;

    this.setIdentity = function (identity) {
      return RNBranch.setIdentity(identity);
    };

    this.logout = RNBranch.logout;

    this.userCompletedAction = function (event) {
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return RNBranch.userCompletedAction(event, state);
    };

    this.getShortUrl = RNBranch.getShortUrl;

    this.redeemRewards = function (amount, bucket) {
      return RNBranch.redeemRewards(amount, bucket);
    };

    this.loadRewards = RNBranch.loadRewards;
    this.getCreditHistory = RNBranch.getCreditHistory;
    this.createBranchUniversalObject = _branchUniversalObject2.default;

    if (options.debug) this._debug = true;
  }

  _createClass(Branch, [{
    key: 'subscribe',
    value: function subscribe(listener) {
      var _this = this;

      if (this._timeSinceLaunch() < this.initSessionTtl) {
        RNBranch.redeemInitSessionResult().then(function (result) {
          if (result) {
            listener(result);
          }

          _this._addListener(listener);
        });
      } else {
        this._addListener(listener);
      }

      var unsubscribe = function unsubscribe() {
        _this._removeListener(listener);
      };

      return unsubscribe;
    }
  }, {
    key: '_timeSinceLaunch',
    value: function _timeSinceLaunch() {
      return new Date().getTime() - this._launchTime;
    }
  }, {
    key: '_addListener',
    value: function _addListener(listener) {
      this.nativeEventEmitter.addListener(RNBranch.INIT_SESSION_SUCCESS, listener);
      this.nativeEventEmitter.addListener(RNBranch.INIT_SESSION_ERROR, listener);
    }
  }, {
    key: '_removeListener',
    value: function _removeListener(listener) {
      this.nativeEventEmitter.removeListener(RNBranch.INIT_SESSION_SUCCESS, listener);
      this.nativeEventEmitter.removeListener(RNBranch.INIT_SESSION_ERROR, listener);
    }
  }]);

  return Branch;
}();

exports.Branch = Branch;
exports.default = new Branch();