const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined";

const isWebWorker =
  typeof self === "object" &&
  self.constructor &&
  self.constructor.name === "DedicatedWorkerGlobalScope";

const isNode =
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null;

/**
 * @see https://github.com/jsdom/jsdom/releases/tag/12.0.0
 * @see https://github.com/jsdom/jsdom/issues/1537
 */
const isJsDom = (() =>
  (typeof window !== "undefined" && window.name === "nodejs") ||
  navigator.userAgent.includes("Node.js") ||
  navigator.userAgent.includes("jsdom"))();

const isDeno = typeof Deno !== "undefined" && typeof Deno.core !== "undefined";

export { isBrowser, isWebWorker, isNode, isJsDom, isDeno };
