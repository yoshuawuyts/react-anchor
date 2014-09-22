/**
 * Module dependencies
 */

var react = require('react');
var dom = react.DOM;

/**
 * Create a react anchor factory.
 *
 * @param {Function} open
 * @param {String} className
 * @api public
 */

module.exports = function(open, className) {

  open = open || function() {};
  className = className || '';

  return function(opts, inner) {

    var href = '';
    var scopedClass = className;

    if ('object' == typeof opts) {
      href = opts.href || href;
      if (opts.className) scopedClass += (' ' + opts.className);
    } else {
      href = opts;
    }

    var attrs = {
      href: href,
      className: scopedClass,
      onClick: handleClick.bind(this, href)
    };

    function handleClick(href, e) {
      e.preventDefault();
      open(href);
    }

    return dom.a(attrs, inner);
  };
};
