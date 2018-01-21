

'use strict';

var Promise = require('promise/setimmediate/es6-extensions');
require('promise/setimmediate/done');

Promise.prototype['finally'] = function (onSettled) {
  return this.then(onSettled, onSettled);
};

module.exports = Promise;