'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Linking = exports.Linking = {
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getInitialURL: function () {
    return Promise.reject('Unsupported platform');
  }
};

var BackHandler = exports.BackHandler = {
  addEventListener: function addEventListener() {}
};