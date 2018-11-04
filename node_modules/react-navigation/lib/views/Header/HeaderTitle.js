'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactNative = require('react-native');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AnimatedText = _reactNative.Animated.Text;

var HeaderTitle = function HeaderTitle(_ref) {
  var style = _ref.style,
      rest = _objectWithoutProperties(_ref, ['style']);

  return React.createElement(AnimatedText, _extends({
    numberOfLines: 1
  }, rest, {
    style: [styles.title, style],
    accessibilityTraits: 'header'
  }));
};

var styles = _reactNative.StyleSheet.create({
  title: {
    fontSize: _reactNative.Platform.OS === 'ios' ? 17 : 20,
    fontWeight: _reactNative.Platform.OS === 'ios' ? '600' : '500',
    color: 'rgba(0, 0, 0, .9)',
    textAlign: _reactNative.Platform.OS === 'ios' ? 'center' : 'left',
    marginHorizontal: 16
  }
});

exports.default = HeaderTitle;