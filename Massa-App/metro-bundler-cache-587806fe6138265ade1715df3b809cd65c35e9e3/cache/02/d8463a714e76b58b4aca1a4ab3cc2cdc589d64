Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.googleMapIsInstalled = exports.createNotSupportedComponent = exports.contextTypes = exports.NOT_SUPPORTED = exports.USES_DEFAULT_IMPLEMENTATION = exports.SUPPORTED = undefined;
exports.getAirMapName = getAirMapName;
exports.default = decorateMapComponent;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _ProviderConstants = require('./ProviderConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SUPPORTED = exports.SUPPORTED = 'SUPPORTED';
var USES_DEFAULT_IMPLEMENTATION = exports.USES_DEFAULT_IMPLEMENTATION = 'USES_DEFAULT_IMPLEMENTATION';
var NOT_SUPPORTED = exports.NOT_SUPPORTED = 'NOT_SUPPORTED';

function getAirMapName(provider) {
  if (_reactNative.Platform.OS === 'android') return 'AIRMap';
  if (provider === _ProviderConstants.PROVIDER_GOOGLE) return 'AIRGoogleMap';
  return 'AIRMap';
}

function getAirComponentName(provider, component) {
  return '' + getAirMapName(provider) + component;
}

var contextTypes = exports.contextTypes = {
  provider: _propTypes2.default.string
};

var createNotSupportedComponent = exports.createNotSupportedComponent = function createNotSupportedComponent(message) {
  return function () {
    console.error(message);
    return null;
  };
};

var googleMapIsInstalled = exports.googleMapIsInstalled = !!_reactNative.NativeModules.UIManager[getAirMapName(_ProviderConstants.PROVIDER_GOOGLE)];

function decorateMapComponent(Component, _ref) {
  var componentType = _ref.componentType,
      providers = _ref.providers;

  var components = {};

  var getDefaultComponent = function getDefaultComponent() {
    return (0, _reactNative.requireNativeComponent)(getAirComponentName(null, componentType), Component);
  };

  Component.contextTypes = contextTypes;
  Component.prototype.getAirComponent = function getAirComponent() {
    var provider = this.context.provider || _ProviderConstants.PROVIDER_DEFAULT;
    if (components[provider]) return components[provider];

    if (provider === _ProviderConstants.PROVIDER_DEFAULT) {
      components[_ProviderConstants.PROVIDER_DEFAULT] = getDefaultComponent();
      return components[_ProviderConstants.PROVIDER_DEFAULT];
    }

    var providerInfo = providers[provider];
    var platformSupport = providerInfo[_reactNative.Platform.OS];
    var componentName = getAirComponentName(provider, componentType);
    if (platformSupport === NOT_SUPPORTED) {
      components[provider] = createNotSupportedComponent('react-native-maps: ' + componentName + ' is not supported on ' + _reactNative.Platform.OS);
    } else if (platformSupport === SUPPORTED) {
      if (provider !== _ProviderConstants.PROVIDER_GOOGLE || _reactNative.Platform.OS === 'ios' && googleMapIsInstalled) {
        components[provider] = (0, _reactNative.requireNativeComponent)(componentName, Component);
      }
    } else {
      if (!components[_ProviderConstants.PROVIDER_DEFAULT]) components[_ProviderConstants.PROVIDER_DEFAULT] = getDefaultComponent();
      components[provider] = components[_ProviderConstants.PROVIDER_DEFAULT];
    }

    return components[provider];
  };

  Component.prototype.getUIManagerCommand = function getUIManagerCommand(name) {
    return _reactNative.NativeModules.UIManager[getAirComponentName(this.context.provider, componentType)].Commands[name];
  };

  Component.prototype.getMapManagerCommand = function getMapManagerCommand(name) {
    var airComponentName = getAirComponentName(this.context.provider, componentType) + 'Manager';
    return _reactNative.NativeModules[airComponentName][name];
  };

  return Component;
}