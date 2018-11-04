'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withCachedChildNavigation;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _addNavigationHelpers = require('./addNavigationHelpers');

var _addNavigationHelpers2 = _interopRequireDefault(_addNavigationHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HOC which caches the child navigation items.
 */
function withCachedChildNavigation(Comp) {
  var _class, _temp2;

  var displayName = Comp.displayName || Comp.name;
  return _temp2 = _class = function (_React$PureComponent) {
    _inherits(_class, _React$PureComponent);

    function _class() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this._updateNavigationProps = function (navigation) {
        // Update props for each child route
        if (!_this._childNavigationProps) {
          _this._childNavigationProps = {};
        }
        navigation.state.routes.forEach(function (route) {
          var childNavigation = _this._childNavigationProps[route.key];
          if (childNavigation && childNavigation.state === route) {
            return;
          }
          _this._childNavigationProps[route.key] = (0, _addNavigationHelpers2.default)({
            dispatch: navigation.dispatch,
            state: route
          });
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._updateNavigationProps(this.props.navigation);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this._updateNavigationProps(nextProps.navigation);
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(Comp, _extends({}, this.props, {
          childNavigationProps: this._childNavigationProps
        }));
      }
    }]);

    return _class;
  }(React.PureComponent), _class.displayName = 'withCachedChildNavigation(' + displayName + ')', _temp2;
}