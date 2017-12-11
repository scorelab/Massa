

'use strict';

var React = require('react');
var factory = require('./factory');

if (typeof React === 'undefined') {
  throw Error('create-react-class could not find the React object. If you are using script tags, ' + 'make sure that React is being loaded before create-react-class.');
}

var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(React.Component, React.isValidElement, ReactNoopUpdateQueue);