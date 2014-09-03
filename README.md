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
var anchorFactory = AnchorFactory(open);

// Create a new anchor tag.
var opts = {
  url: '/yoshuawuyts',
  className: 'profile-link'
};
anchorFactory(opts, 'gh/yoshuawuyts');
// => {ReactComponent}
```

## API
#### AnchorFactory(openFunction)
Create a new anchorFactory, which returns anchor components.
```js
var AnchorFactory = require('react-anchor');
var myCustomOpenFunc = function() {
  // do stuff
};

var anchorFactory = AnchorFactory(myCustomOpenFunc);
```

#### AnchorFactory()(opts, inner)
Call the newly created anchorFactory and create a new anchor tag. Takes an
opts object with a `url` and `className` property. Also takes an `inner`
argument which sets the children of the anchor tag.
```js
var anchorTag = anchorFactory({url: '/hello', className: 'link'}, 'hello');
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)
