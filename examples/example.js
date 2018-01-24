/* eslint-disable import/no-extraneous-dependencies, no-console */
const jsEnv = require('../lib');

console.log(jsEnv.isBrowser); // false when this runs in node.js
console.log(jsEnv.isNode); // true when this runs in node.js
