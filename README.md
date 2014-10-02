# react-anchor
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Functional factory to create anchor components that trigger custom actions. Uses
`event.preventDefault` under the hood.

## Installation
```bash
$ npm i --save react-anchor
```
## Overview
```js
var anchorFactory = require('react-anchor');
var open = require('open');

// create factory that generates links

var profileLinkFactory = anchorFactory({
  onClick: open,
  className: 'profile-link'
});

// create a new `<a>` tag

profileLinkFactory({
  href: 'gh/yoshuawuyts',
  children: '/yoshuawuyts',
  className: 'foo-bar'
});
```

creates the following component:
```js
var opts = {
  className: 'profile-link foo-bar',
  href: 'gh/yoshuawuyts',
  onClick: handleClick.bind(this)
};

return react.DOM.a(opts, 'gh/yoshuawuyts');

function handleClick(e) {
  e.preventDefault();
  e.stopPropagation();
  open('gh/yoshuawuyts');
}
```

## API
#### var linkFactory = AnchorFactory(openFunction)
Create a new anchorFactory, which returns an anchor components.
```js
var AnchorFactory = require('react-anchor');
var router = require('./myRouter');

var anchorFactory = AnchorFactory(router.navigate, 'menu-link');
```

#### linkFactory(url, inner)
Call the newly created anchorFactory and create a new anchor tag. Either takes an url or
an opts object with a `url` and `className` property. Also takes an `inner`
argument which sets the children of the anchor tag.

If you're using an object as argument, note that `className` will extend the class set in the AnchorFactory.
So if the anchorFactory provides `.link` and you create a tag with class `.modal-link` you get `.link .modal-link`.
```js
var anchorTag = anchorFactory('/hello', 'hello');
var otherTag = anchorFactory({href: '/hello', className: 'sup'}, 'hello');
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/react-anchor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-anchor
[travis-image]: https://img.shields.io/travis/yoshuawuyts/react-anchor.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/react-anchor
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/react-anchor.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/react-anchor?branch=master
