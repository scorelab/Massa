'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * Helpers for navigation.
                                                                                                                                                                                                                                                                   */

exports.default = function (navigation) {
  return _extends({}, navigation, {
    goBack: function goBack(key) {
      var actualizedKey = key;
      if (key === undefined && navigation.state.key) {
        (0, _invariant2.default)(typeof navigation.state.key === 'string', 'key should be a string');
        actualizedKey = navigation.state.key;
      }
      return navigation.dispatch(_NavigationActions2.default.back({ key: actualizedKey }));
    },
    navigate: function navigate(routeName, params, action) {
      return navigation.dispatch(_NavigationActions2.default.navigate({ routeName: routeName, params: params, action: action }));
    },
    /**
     * For updating current route params. For example the nav bar title and
     * buttons are based on the route params.
     * This means `setParams` can be used to update nav bar for example.
     */
    setParams: function setParams(params) {
      (0, _invariant2.default)(navigation.state.key && typeof navigation.state.key === 'string', 'setParams cannot be called by root navigator');
      var key = navigation.state.key;
      return navigation.dispatch(_NavigationActions2.default.setParams({ params: params, key: key }));
    }
  });
};

var _NavigationActions = require('./NavigationActions');

var _NavigationActions2 = _interopRequireDefault(_NavigationActions);

var _invariant = require('./utils/invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }