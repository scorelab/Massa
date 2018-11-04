'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactNative = require('react-native');

var _SafeAreaView = require('../SafeAreaView');

var _SafeAreaView2 = _interopRequireDefault(_SafeAreaView);

var _TouchableItem = require('../TouchableItem');

var _TouchableItem2 = _interopRequireDefault(_TouchableItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Component that renders the navigation list in the drawer.
 */
var DrawerNavigatorItems = function DrawerNavigatorItems(_ref) {
  var _ref$navigation = _ref.navigation,
      state = _ref$navigation.state,
      navigate = _ref$navigation.navigate,
      items = _ref.items,
      activeItemKey = _ref.activeItemKey,
      activeTintColor = _ref.activeTintColor,
      activeBackgroundColor = _ref.activeBackgroundColor,
      inactiveTintColor = _ref.inactiveTintColor,
      inactiveBackgroundColor = _ref.inactiveBackgroundColor,
      getLabel = _ref.getLabel,
      renderIcon = _ref.renderIcon,
      onItemPress = _ref.onItemPress,
      itemsContainerStyle = _ref.itemsContainerStyle,
      itemStyle = _ref.itemStyle,
      labelStyle = _ref.labelStyle,
      iconContainerStyle = _ref.iconContainerStyle,
      drawerPosition = _ref.drawerPosition;
  return React.createElement(
    _reactNative.View,
    { style: [styles.container, itemsContainerStyle] },
    items.map(function (route, index) {
      var _ref2;

      var focused = activeItemKey === route.key;
      var color = focused ? activeTintColor : inactiveTintColor;
      var backgroundColor = focused ? activeBackgroundColor : inactiveBackgroundColor;
      var scene = { route: route, index: index, focused: focused, tintColor: color };
      var icon = renderIcon(scene);
      var label = getLabel(scene);
      return React.createElement(
        _TouchableItem2.default,
        {
          key: route.key,
          onPress: function onPress() {
            onItemPress({ route: route, focused: focused });
          },
          delayPressIn: 0
        },
        React.createElement(
          _SafeAreaView2.default,
          {
            style: { backgroundColor: backgroundColor },
            forceInset: (_ref2 = {}, _defineProperty(_ref2, drawerPosition, 'always'), _defineProperty(_ref2, drawerPosition === 'left' ? 'right' : 'left', 'never'), _defineProperty(_ref2, 'vertical', 'never'), _ref2)
          },
          React.createElement(
            _reactNative.View,
            { style: [styles.item, itemStyle] },
            icon ? React.createElement(
              _reactNative.View,
              {
                style: [styles.icon, focused ? null : styles.inactiveIcon, iconContainerStyle]
              },
              icon
            ) : null,
            typeof label === 'string' ? React.createElement(
              _reactNative.Text,
              { style: [styles.label, { color: color }, labelStyle] },
              label
            ) : label
          )
        )
      );
    })
  );
};

/* Material design specs - https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs */
DrawerNavigatorItems.defaultProps = {
  activeTintColor: '#2196f3',
  activeBackgroundColor: 'rgba(0, 0, 0, .04)',
  inactiveTintColor: 'rgba(0, 0, 0, .87)',
  inactiveBackgroundColor: 'transparent'
};

var styles = _reactNative.StyleSheet.create({
  container: {
    paddingVertical: 4
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center'
  },
  inactiveIcon: {
    /*
     * Icons have 0.54 opacity according to guidelines
     * 100/87 * 54 ~= 62
     */
    opacity: 0.62
  },
  label: {
    margin: 16,
    fontWeight: 'bold'
  }
});

exports.default = DrawerNavigatorItems;