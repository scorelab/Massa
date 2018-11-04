'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactNative = require('react-native');

var _invariant = require('../utils/invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ScenesReducer = require('./ScenesReducer');

var _ScenesReducer2 = _interopRequireDefault(_ScenesReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Used for all animations unless overriden
var DefaultTransitionSpec = {
  duration: 250,
  easing: _reactNative.Easing.inOut(_reactNative.Easing.ease),
  timing: _reactNative.Animated.timing
};

var Transitioner = function (_React$Component) {
  _inherits(Transitioner, _React$Component);

  function Transitioner(props, context) {
    _classCallCheck(this, Transitioner);

    // The initial layout isn't measured. Measured layout will be only available
    // when the component is mounted.
    var _this = _possibleConstructorReturn(this, (Transitioner.__proto__ || Object.getPrototypeOf(Transitioner)).call(this, props, context));

    var layout = {
      height: new _reactNative.Animated.Value(0),
      initHeight: 0,
      initWidth: 0,
      isMeasured: false,
      width: new _reactNative.Animated.Value(0)
    };

    _this.state = {
      layout: layout,
      position: new _reactNative.Animated.Value(_this.props.navigation.state.index),
      progress: new _reactNative.Animated.Value(1),
      scenes: (0, _ScenesReducer2.default)([], _this.props.navigation.state)
    };

    _this._prevTransitionProps = null;
    _this._transitionProps = buildTransitionProps(props, _this.state);
    _this._isMounted = false;
    _this._isTransitionRunning = false;
    _this._queuedTransition = null;
    return _this;
  }

  _createClass(Transitioner, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._onLayout = this._onLayout.bind(this);
      this._onTransitionEnd = this._onTransitionEnd.bind(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextScenes = (0, _ScenesReducer2.default)(this.state.scenes, nextProps.navigation.state, this.props.navigation.state);

      if (nextScenes === this.state.scenes) {
        return;
      }

      var indexHasChanged = nextProps.navigation.state.index !== this.props.navigation.state.index;
      if (this._isTransitionRunning) {
        this._queuedTransition = { nextProps: nextProps, nextScenes: nextScenes, indexHasChanged: indexHasChanged };
        return;
      }

      this._startTransition(nextProps, nextScenes, indexHasChanged);
    }
  }, {
    key: '_startTransition',
    value: function _startTransition(nextProps, nextScenes, indexHasChanged) {
      var _this2 = this;

      var nextState = _extends({}, this.state, {
        scenes: nextScenes
      });

      var position = nextState.position,
          progress = nextState.progress;


      progress.setValue(0);

      this._prevTransitionProps = this._transitionProps;
      this._transitionProps = buildTransitionProps(nextProps, nextState);

      // get the transition spec.
      var transitionUserSpec = nextProps.configureTransition ? nextProps.configureTransition(this._transitionProps, this._prevTransitionProps) : null;

      var transitionSpec = _extends({}, DefaultTransitionSpec, transitionUserSpec);

      var timing = transitionSpec.timing;

      delete transitionSpec.timing;

      var toValue = nextProps.navigation.state.index;
      var positionHasChanged = position.__getValue() !== toValue;

      // if swiped back, indexHasChanged == true && positionHasChanged == false
      var animations = indexHasChanged && positionHasChanged ? [timing(progress, _extends({}, transitionSpec, {
        toValue: 1
      })), timing(position, _extends({}, transitionSpec, {
        toValue: nextProps.navigation.state.index
      }))] : [];

      // update scenes and play the transition
      this._isTransitionRunning = true;
      this.setState(nextState, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!nextProps.onTransitionStart) {
                  _context.next = 5;
                  break;
                }

                result = nextProps.onTransitionStart(_this2._transitionProps, _this2._prevTransitionProps);

                if (!(result instanceof Promise)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return result;

              case 5:
                _reactNative.Animated.parallel(animations).start(_this2._onTransitionEnd);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        _reactNative.View,
        { onLayout: this._onLayout, style: [styles.main] },
        this.props.render(this._transitionProps, this._prevTransitionProps)
      );
    }
  }, {
    key: '_onLayout',
    value: function _onLayout(event) {
      var _event$nativeEvent$la = event.nativeEvent.layout,
          height = _event$nativeEvent$la.height,
          width = _event$nativeEvent$la.width;

      if (this.state.layout.initWidth === width && this.state.layout.initHeight === height) {
        return;
      }
      var layout = _extends({}, this.state.layout, {
        initHeight: height,
        initWidth: width,
        isMeasured: true
      });

      layout.height.setValue(height);
      layout.width.setValue(width);

      var nextState = _extends({}, this.state, {
        layout: layout
      });

      this._transitionProps = buildTransitionProps(this.props, nextState);
      this.setState(nextState);
    }
  }, {
    key: '_onTransitionEnd',
    value: function _onTransitionEnd() {
      var _this3 = this;

      if (!this._isMounted) {
        return;
      }
      var prevTransitionProps = this._prevTransitionProps;
      this._prevTransitionProps = null;

      var nextState = _extends({}, this.state, {
        scenes: this.state.scenes.filter(isSceneNotStale)
      });

      this._transitionProps = buildTransitionProps(this.props, nextState);

      this.setState(nextState, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this3.props.onTransitionEnd) {
                  _context2.next = 5;
                  break;
                }

                result = _this3.props.onTransitionEnd(_this3._transitionProps, prevTransitionProps);

                if (!(result instanceof Promise)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return result;

              case 5:

                if (_this3._queuedTransition) {
                  _this3._startTransition(_this3._queuedTransition.nextProps, _this3._queuedTransition.nextScenes, _this3._queuedTransition.indexHasChanged);
                  _this3._queuedTransition = null;
                } else {
                  _this3._isTransitionRunning = false;
                }

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      })));
    }
  }]);

  return Transitioner;
}(React.Component);

function buildTransitionProps(props, state) {
  var navigation = props.navigation;
  var layout = state.layout,
      position = state.position,
      progress = state.progress,
      scenes = state.scenes;


  var scene = scenes.find(isSceneActive);

  (0, _invariant2.default)(scene, 'Could not find active scene');

  return {
    layout: layout,
    navigation: navigation,
    position: position,
    progress: progress,
    scenes: scenes,
    scene: scene,
    index: scene.index
  };
}

function isSceneNotStale(scene) {
  return !scene.isStale;
}

function isSceneActive(scene) {
  return scene.isActive;
}

var styles = _reactNative.StyleSheet.create({
  main: {
    flex: 1
  }
});

exports.default = Transitioner;