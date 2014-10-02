/**
 * Module dependencies
 */

var assert = require('assert');
var react = require('react');
var dom = react.DOM;

/**
 * Create a react anchor factory.
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */

module.exports = function(opts) {
  assert.equal(typeof opts, 'object', 'react-anchor: opts should be an object');
  var open = opts.open || function() {};
  var className = opts.className || '';

  return function(innerOpts) {
    assert.equal(typeof innerOpts, 'object', 'react-anchor: opts should be an object');

    var href = innerOpts.href || '';
    var children = innerOpts.children || '';
    var scopedClass = className;

    if (innerOpts.className) scopedClass += (' ' + innerOpts.className);

    var attrs = {
      href: href,
      className: scopedClass,
      onClick: handleClick.bind(this, href),
      children: children
    };

    function handleClick(href, e) {
      e.stopPropagation();
      e.preventDefault();
      open(href);
    }

    return dom.a(attrs);
  };
};
