# Browser or Node.js
[![Build Status](https://travis-ci.org/flexdinesh/brower-or-node.svg?branch=master)](https://travis-ci.org/flexdinesh/brower-or-node)
[![npm version](https://badge.fury.io/js/brower-or-node.svg)](https://www.npmjs.com/package/brower-or-node)
[![dependencies Status](https://david-dm.org/flexdinesh/brower-or-node/status.svg)](https://david-dm.org/flexdinesh/brower-or-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dt/brower-or-node.svg)](https://www.npmjs.com/package/brower-or-node)

Check whether the code is running in the browser or node.js runtime.

## Install

```
$ npm install --save brower-or-node
```

## Usage

ES6 style import
```js
import { isBrowser, isNode } from 'brower-or-node';

if (isBrowser) {
  // do browser only stuff
}

if (isNode) {
  // do node.js only stuff
}

```
ES5 style import
```js
var jsEnv = require('brower-or-node');

if (jsEnv.isBrowser) {
  // do browser only stuff
}

if (jsEnv.isNode) {
  // do node.js only stuff
}

```

## License

MIT © Dineshkumar Pandiyan
