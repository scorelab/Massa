'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withNavigation;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function withNavigation(Component) {
  var componentWithNavigation = function componentWithNavigation(props, _ref) {
    var navigation = _ref.navigation;
    return React.createElement(Component, _extends({}, props, { navigation: navigation }));
  };

  // $FlowFixMe StatelessFunctionalComponent missing displayName Flow < 0.54.0
  var displayName = Component.displayName || Component.name;
  componentWithNavigation.displayName = 'withNavigation(' + displayName + ')';

  componentWithNavigation.contextTypes = {
    navigation: _propTypes2.default.object.isRequired
  };

  return (0, _hoistNonReactStatics2.default)(componentWithNavigation, Component);
}