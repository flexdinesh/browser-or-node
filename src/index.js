/* global window */

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

const isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

export {
  isBrowser,
  isNode
};
