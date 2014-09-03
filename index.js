/**
 * Module dependencies
 */

var react = require('react');
var dom = react.dom;

/**
 * Create a react anchor factory.
 */

module.exports = function(open, class) {

  return function(url, inner) {
    var attrs = {
      href: url,
      className: class,
      onClick: handleClick.bind(this, url)
    };

    function handleClick(url, e) {
      e.preventDefault();
      open(url);
    }

    return dom.a(attrs, inner);
  }
}
