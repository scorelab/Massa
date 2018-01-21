Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactNative = require('react-native');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var RNBranch = _reactNative.NativeModules.RNBranch;

exports.default = function createBranchUniversalObject(identifier) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var branchUniversalObject, _ref, ident;

  return regeneratorRuntime.async(function createBranchUniversalObject$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof identifier !== 'string')) {
            _context.next = 2;
            break;
          }

          throw new Error('react-native-branch: identifier must be a string');

        case 2:
          branchUniversalObject = _extends({
            contentIndexingMode: 'private',
            canonicalIdentifier: identifier
          }, options);
          _context.next = 5;
          return regeneratorRuntime.awrap(RNBranch.createUniversalObject(branchUniversalObject));

        case 5:
          _ref = _context.sent;
          ident = _ref.ident;
          return _context.abrupt('return', {
            ident: ident,
            showShareSheet: function showShareSheet() {
              var shareOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var linkProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var controlParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

              shareOptions = _extends({
                title: options.title || '',
                text: options.contentDescription || ''
              }, shareOptions);

              linkProperties = _extends({
                feature: 'share',
                channel: 'RNApp'
              }, linkProperties);

              return this._tryFunction(RNBranch.showShareSheet, shareOptions, linkProperties, controlParams);
            },
            registerView: function registerView() {
              return this._tryFunction(RNBranch.registerView);
            },
            generateShortUrl: function generateShortUrl() {
              var linkProperties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var controlParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              return this._tryFunction(RNBranch.generateShortUrl, linkProperties, controlParams);
            },
            listOnSpotlight: function listOnSpotlight() {
              if (_reactNative.Platform.OS !== 'ios') return Promise.resolve();
              return this._tryFunction(RNBranch.listOnSpotlight);
            },
            userCompletedAction: function userCompletedAction(event) {
              var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              return this._tryFunction(RNBranch.userCompletedActionOnUniversalObject, event, state);
            },
            release: function release() {
              RNBranch.releaseUniversalObject(this.ident);
            },
            _tryFunction: function _tryFunction(func) {
              var _this = this;

              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              return func.apply(undefined, [this.ident].concat(_toConsumableArray(args))).catch(function (error) {
                if (error.code != 'RNBranch::Error::BUONotFound') {
                  throw error;
                }

                return RNBranch.createUniversalObject(branchUniversalObject).then(function (response) {
                  _this.ident = response.ident;
                  return func.apply(undefined, [response.ident].concat(_toConsumableArray(args)));
                });
              });
            }
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};