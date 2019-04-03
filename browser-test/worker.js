// HELP!
// self.importScripts(...) imports the script, but then Chrome throws
// an error on export {...} syntax

// self.importScripts('browser-or-node.js');

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

/* eslint-disable no-restricted-globals */
const isWebWorker =
  typeof self === 'object' &&
  self.constructor &&
  self.constructor.name === 'DedicatedWorkerGlobalScope';
/* eslint-enable no-restricted-globals */

const isNode =
  typeof process !== 'undefined' &&
  process.versions != null &&
  process.versions.node != null;

onmessage = function(e) {
  postMessage( [isBrowser, isWebWorker, isNode] );
}
