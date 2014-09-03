/**
 * Module dependencies
 */

var react = require('react');
var dom = react.dom;

/**
 * Create a react anchor factory.
 */

module.exports = function(open, className) {

  return function(url, inner) {
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
  }
}
