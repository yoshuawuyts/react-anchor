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

    var url = '';
    
    if ('object' == typeof opts) {
      url = opts.url || url;
      if (opts.className) className += (' ' + opts.className);
    } else {
      url = opts;
    }

    var attrs = {
      href: url,
      className: className,
      onClick: handleClick.bind(this, url)
    };

    function handleClick(url, e) {
      e.preventDefault();
      open(url);
    }

    return dom.a(attrs, inner);
  };
};
