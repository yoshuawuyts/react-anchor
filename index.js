/**
 * Module dependencies
 */

var assert = require('assert');
var react = require('react');
var dom = react.DOM;

/**
 * Create a react anchor factory.
 *
 * @param {Function} open
 * @param {String} className
 * @api public
 */

module.exports = function(openFn, className) {
  assert('function' == typeof openFn, 'OpenFn should be a function');
  className = className || '';

  /**
   * Create a factory function
   *
   * @param {Object} opts
   * @param {inner}
   * @api private
   */

  return function(opts, inner) {
    assert('object' == typeof opts, 'Opts should be an object');
    assert('string' == typeof opts.href, 'Href should be a string');

    if (opts.className) className = className.concat(' ', opts.className);

    return react.createClass({
      render: function() {
        var clickFn = handleClick.bind(this, opts.href);
        return dom.a({href: opts.href, className: className, onClick: clickFn},
          inner
        );
      }
    });
  };

  /**
   * Open a link with the 'open' function
   *
   * @param {String} url
   * @api private
   */

  function handleClick(url, e) {
    e.preventDefault();
    openFn(url);
  }
};
