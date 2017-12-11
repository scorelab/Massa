Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function arrayDiffer(a, b) {
    if (a == null || b == null) {
        return true;
    }
    if (a.length !== b.length) {
        return true;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return true;
        }
    }
    return false;
}

function fontDiffer(a, b) {
    if (a === b) {
        return false;
    }

    return a.fontSize !== b.fontSize || a.fontFamily !== b.fontFamily || a.fontStyle !== b.fontStyle || a.fontWeight !== b.fontWeight;
}

var ViewBoxAttributes = {
    minX: true,
    minY: true,
    vbWidth: true,
    vbHeight: true,
    align: true,
    meetOrSlice: true
};

var NodeAttributes = {
    name: true,
    matrix: {
        diff: arrayDiffer
    },
    opacity: true,
    clipRule: true,
    clipPath: true,
    propList: {
        diff: arrayDiffer
    },
    responsible: true
};

var FillAndStrokeAttributes = {
    fill: {
        diff: arrayDiffer
    },
    fillOpacity: true,
    fillRule: true,
    stroke: {
        diff: arrayDiffer
    },
    strokeOpacity: true,
    strokeWidth: true,
    strokeLinecap: true,
    strokeLinejoin: true,
    strokeDasharray: {
        diff: arrayDiffer
    },
    strokeDashoffset: true,
    strokeMiterlimit: true
};

var RenderableAttributes = _extends({}, NodeAttributes, FillAndStrokeAttributes);

var GroupAttributes = RenderableAttributes;

var UseAttributes = _extends({
    href: true,
    width: true,
    height: true
}, RenderableAttributes);

var SymbolAttributes = _extends({
    name: true
}, ViewBoxAttributes);

var PathAttributes = _extends({
    d: true
}, RenderableAttributes);

var TextAttributes = _extends({
    font: {
        diff: fontDiffer
    },
    textAnchor: true,
    deltaX: arrayDiffer,
    deltaY: arrayDiffer,
    positionX: true,
    positionY: true
}, RenderableAttributes);

var TextPathAttributes = _extends({
    href: true,
    startOffset: true
}, RenderableAttributes);

var TSpanAttibutes = _extends({
    content: true
}, TextAttributes);

var ClipPathAttributes = {
    name: true
};

var GradientAttributes = _extends({
    gradient: {
        diff: arrayDiffer
    },
    gradientUnits: true,
    gradientTransform: {
        diff: arrayDiffer
    }
}, ClipPathAttributes);

var LinearGradientAttributes = _extends({
    x1: true,
    y1: true,
    x2: true,
    y2: true
}, GradientAttributes);

var RadialGradientAttributes = _extends({
    fx: true,
    fy: true,
    rx: true,
    ry: true,
    cx: true,
    cy: true,
    r: true
}, GradientAttributes);

var CircleAttributes = _extends({
    cx: true,
    cy: true,
    r: true
}, RenderableAttributes);

var EllipseAttributes = _extends({
    cx: true,
    cy: true,
    rx: true,
    ry: true
}, RenderableAttributes);

var ImageAttributes = _extends({
    x: true,
    y: true,
    width: true,
    height: true,
    src: true,
    align: true,
    meetOrSlice: true
}, RenderableAttributes);

var LineAttributes = _extends({
    x1: true,
    y1: true,
    x2: true,
    y2: true
}, RenderableAttributes);

var RectAttributes = _extends({
    x: true,
    y: true,
    width: true,
    height: true,
    rx: true,
    ry: true
}, RenderableAttributes);

exports.PathAttributes = PathAttributes;
exports.TextAttributes = TextAttributes;
exports.TSpanAttibutes = TSpanAttibutes;
exports.TextPathAttributes = TextPathAttributes;
exports.GroupAttributes = GroupAttributes;
exports.ClipPathAttributes = ClipPathAttributes;
exports.CircleAttributes = CircleAttributes;
exports.EllipseAttributes = EllipseAttributes;
exports.ImageAttributes = ImageAttributes;
exports.LineAttributes = LineAttributes;
exports.RectAttributes = RectAttributes;
exports.UseAttributes = UseAttributes;
exports.SymbolAttributes = SymbolAttributes;
exports.LinearGradientAttributes = LinearGradientAttributes;
exports.RadialGradientAttributes = RadialGradientAttributes;
exports.ViewBoxAttributes = ViewBoxAttributes;