'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactNative = require('react-native');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabBarIcon = function (_React$PureComponent) {
  _inherits(TabBarIcon, _React$PureComponent);

  function TabBarIcon() {
    _classCallCheck(this, TabBarIcon);

    return _possibleConstructorReturn(this, (TabBarIcon.__proto__ || Object.getPrototypeOf(TabBarIcon)).apply(this, arguments));
  }

  _createClass(TabBarIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          position = _props.position,
          scene = _props.scene,
          navigation = _props.navigation,
          activeTintColor = _props.activeTintColor,
          inactiveTintColor = _props.inactiveTintColor,
          style = _props.style;
      var route = scene.route,
          index = scene.index;
      var routes = navigation.state.routes;
      // Prepend '-1', so there are always at least 2 items in inputRange

      var inputRange = [-1].concat(_toConsumableArray(routes.map(function (x, i) {
        return i;
      })));
      var activeOpacity = position.interpolate({
        inputRange: inputRange,
        outputRange: inputRange.map(function (i) {
          return i === index ? 1 : 0;
        })
      });
      var inactiveOpacity = position.interpolate({
        inputRange: inputRange,
        outputRange: inputRange.map(function (i) {
          return i === index ? 0 : 1;
        })
      });
      // We render the icon twice at the same position on top of each other:
      // active and inactive one, so we can fade between them.
      return React.createElement(
        _reactNative.View,
        { style: style },
        React.createElement(
          _reactNative.Animated.View,
          { style: [styles.icon, { opacity: activeOpacity }] },
          this.props.renderIcon({
            route: route,
            index: index,
            focused: true,
            tintColor: activeTintColor
          })
        ),
        React.createElement(
          _reactNative.Animated.View,
          { style: [styles.icon, { opacity: inactiveOpacity }] },
          this.props.renderIcon({
            route: route,
            index: index,
            focused: false,
            tintColor: inactiveTintColor
          })
        )
      );
    }
  }]);

  return TabBarIcon;
}(React.PureComponent);

exports.default = TabBarIcon;


var styles = _reactNative.StyleSheet.create({
  icon: {
    // We render the icon twice at the same position on top of each other:
    // active and inactive one, so we can fade between them:
    // Cover the whole iconContainer:
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});