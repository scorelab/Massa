'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactNative = require('react-native');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TouchableItem renders a touchable that looks native on both iOS and Android.
 *
 * It provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity.
 *
 * On iOS you can pass the props of TouchableOpacity, on Android pass the props
 * of TouchableNativeFeedback.
 */


var ANDROID_VERSION_LOLLIPOP = 21;

var TouchableItem = function (_React$Component) {
  _inherits(TouchableItem, _React$Component);

  function TouchableItem() {
    _classCallCheck(this, TouchableItem);

    return _possibleConstructorReturn(this, (TouchableItem.__proto__ || Object.getPrototypeOf(TouchableItem)).apply(this, arguments));
  }

  _createClass(TouchableItem, [{
    key: 'render',
    value: function render() {
      /*
       * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
       * therefore only enable it on Android Lollipop and above.
       *
       * All touchables on Android should have the ripple effect according to
       * platform design guidelines.
       * We need to pass the background prop to specify a borderless ripple effect.
       */
      if (_reactNative.Platform.OS === 'android' && _reactNative.Platform.Version >= ANDROID_VERSION_LOLLIPOP) {
        var _props = this.props,
            _style = _props.style,
            rest = _objectWithoutProperties(_props, ['style']);

        return React.createElement(
          _reactNative.TouchableNativeFeedback,
          _extends({}, rest, {
            style: null,
            background: _reactNative.TouchableNativeFeedback.Ripple(this.props.pressColor || '', this.props.borderless || false)
          }),
          React.createElement(
            _reactNative.View,
            { style: _style },
            React.Children.only(this.props.children)
          )
        );
      }

      return React.createElement(
        _reactNative.TouchableOpacity,
        this.props,
        this.props.children
      );
    }
  }]);

  return TouchableItem;
}(React.Component);

TouchableItem.defaultProps = {
  borderless: false,
  pressColor: 'rgba(0, 0, 0, .32)'
};
exports.default = TouchableItem;