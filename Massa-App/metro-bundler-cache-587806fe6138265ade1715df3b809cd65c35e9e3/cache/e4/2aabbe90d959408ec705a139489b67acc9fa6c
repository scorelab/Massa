

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && (typeof Symbol === 'function' ? Symbol.for : '@@for') && (typeof Symbol === 'function' ? Symbol.for : '@@for')('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  module.exports = require('./factoryWithThrowingShims')();
}