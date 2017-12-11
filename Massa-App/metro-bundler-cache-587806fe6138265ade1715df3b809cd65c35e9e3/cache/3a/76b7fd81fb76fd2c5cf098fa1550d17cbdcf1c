
'use strict';

var Subscribable = {};

Subscribable.Mixin = {

  componentWillMount: function componentWillMount() {
    this._subscribableSubscriptions = [];
  },

  componentWillUnmount: function componentWillUnmount() {
    this._subscribableSubscriptions.forEach(function (subscription) {
      return subscription.remove();
    });
    this._subscribableSubscriptions = null;
  },

  addListenerOn: function addListenerOn(eventEmitter, eventType, listener, context) {
    this._subscribableSubscriptions.push(eventEmitter.addListener(eventType, listener, context));
  }
};

module.exports = Subscribable;