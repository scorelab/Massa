
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RCTActionSheetManager = require('NativeModules').ActionSheetManager;

var invariant = require('fbjs/lib/invariant');
var processColor = require('processColor');

var ActionSheetIOS = {
  showActionSheetWithOptions: function showActionSheetWithOptions(options, callback) {
    invariant(typeof options === 'object' && options !== null, 'Options must be a valid object');
    invariant(typeof callback === 'function', 'Must provide a valid callback');
    RCTActionSheetManager.showActionSheetWithOptions(_extends({}, options, { tintColor: processColor(options.tintColor) }), callback);
  },
  showShareActionSheetWithOptions: function showShareActionSheetWithOptions(options, failureCallback, successCallback) {
    invariant(typeof options === 'object' && options !== null, 'Options must be a valid object');
    invariant(typeof failureCallback === 'function', 'Must provide a valid failureCallback');
    invariant(typeof successCallback === 'function', 'Must provide a valid successCallback');
    RCTActionSheetManager.showShareActionSheetWithOptions(_extends({}, options, { tintColor: processColor(options.tintColor) }), failureCallback, successCallback);
  }
};

module.exports = ActionSheetIOS;