Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props, ref) {
    var styleProperties = [];

    var extractedProps = {
        opacity: (0, _extractOpacity2.default)(props.opacity),
        propList: styleProperties
    };

    if (props.id) {
        extractedProps.name = props.id;
    }

    if (props.clipPath) {
        _extends(extractedProps, (0, _extractClipPath2.default)(props));
    }

    _extends(extractedProps, (0, _extractStroke2.default)(props, styleProperties));
    _extends(extractedProps, (0, _extractFill2.default)(props, styleProperties));

    if (props.transform) {
        extractedProps.matrix = (0, _extractTransform2.default)(props.transform);
    } else {
        extractedProps.matrix = (0, _extractTransform2.default)(props);
    }

    _extends(extractedProps, (0, _extractResponder2.default)(props, ref));

    return extractedProps;
};

var _extractFill = require('./extractFill');

var _extractFill2 = _interopRequireDefault(_extractFill);

var _extractStroke = require('./extractStroke');

var _extractStroke2 = _interopRequireDefault(_extractStroke);

var _extractTransform = require('./extractTransform');

var _extractTransform2 = _interopRequireDefault(_extractTransform);

var _extractClipPath = require('./extractClipPath');

var _extractClipPath2 = _interopRequireDefault(_extractClipPath);

var _extractResponder = require('./extractResponder');

var _extractResponder2 = _interopRequireDefault(_extractResponder);

var _extractOpacity = require('./extractOpacity');

var _extractOpacity2 = _interopRequireDefault(_extractOpacity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }