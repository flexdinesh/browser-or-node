# Browser or Node.js

[![npm version](https://badge.fury.io/js/browser-or-node.svg)](https://www.npmjs.com/package/browser-or-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Check in which environment the code is running - browser/node.js/webworker/jsdom/deno.

## Install

```
$ npm install --save browser-or-node
```

## Usage

Import the checks and use it in your code. Works with both ESM and CJS imports.

```js
import * as jsEnv from "browser-or-node";
// import { isBrowser, isNode, isWebWorker, isJsDom, isDeno } from "browser-or-node";
// const jsEnv = require("browser-or-node");

if (jsEnv.isBrowser) {
  // do browser only stuff
}

if (jsEnv.isNode) {
  // do node.js only stuff
}

if (jsEnv.isWebWorker) {
  // do web worker only stuff
}

if (jsEnv.isJsDom) {
  // do jsdom only stuff
}

if (jsEnv.isDeno) {
  // do deno only stuff
}
```

## License

MIT © Dinesh Pandiyan
