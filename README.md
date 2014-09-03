# react-anchor

Functional factory to create anchor components that do custom actions. Uses
`event.preventDefault` under the hood.

## Installation
```bash
$ npm i --save react-anchor
```
## Overview
```js
// Require dependencies.
var AnchorFactory = require('react-anchor');
var open = require('open');

// Create a new factory.
var anchorFactory = AnchorFactory(open, 'profile-link');

// Create a new anchor tag.
anchorFactory('/yoshuawuyts', 'gh/yoshuawuyts');
```

returns the following component:
```js
var opts = {
  className: 'profile-link',
  href: 'gh/yoshuawuyts',
  onClick: handleClick.bind(this)
};

function handleClick(e) {
  e.preventDefault();
  open('gh/yoshuawuyts');
}

react.DOM.a(opts, 'gh/yoshuawuyts');
```

## API
#### AnchorFactory(openFunction)
Create a new anchorFactory, which returns an anchor components.
```js
var AnchorFactory = require('react-anchor');
var router = require('./myRouter');

var anchorFactory = AnchorFactory(router.navigate, 'menu-link');
```

#### AnchorFactory()(url, inner)
Call the newly created anchorFactory and create a new anchor tag. Takes an
opts object with a `url` and `className` property. Also takes an `inner`
argument which sets the children of the anchor tag.
```js
var anchorTag = anchorFactory('/hello', 'hello');
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)
