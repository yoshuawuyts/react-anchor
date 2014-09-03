/**
 * Module dependencies
 */

var react = require('react');
var dom = react.dom;

/**
 * Create a react anchor factory.
 */

module.exports = function(open) {

  return function(opts, inner) {
    var attrs = {
      href: opts.href,
      className: opts.className,
      onClick: handleClick.bind(this, url)
    };

    return dom.a(attrs, inner);
  }

  function handleClick(url, e) {
    e.preventDefault();
    open(url);
  }
}
