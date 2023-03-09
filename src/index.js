const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined";

const isNode =
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null;

const isWebWorker =
  typeof self === "object" &&
  self.constructor &&
  self.constructor.name === "DedicatedWorkerGlobalScope";

/**
 * @see https://github.com/jsdom/jsdom/releases/tag/12.0.0
 * @see https://github.com/jsdom/jsdom/issues/1537
 */
const isJsDom =
  (typeof window !== "undefined" && window.name === "nodejs") ||
  (typeof navigator !== "undefined" &&
    (navigator.userAgent.includes("Node.js") ||
      navigator.userAgent.includes("jsdom")));

/**
 * @see https://github.com/capricorn86/happy-dom/discussions/481
 */
const isHappyDom =
  typeof window !== "undefined" && typeof navigator !== "undefined" && typeof window.happyDOM !== "undefined";

const isDeno =
  typeof Deno !== "undefined" &&
  typeof Deno.version !== "undefined" &&
  typeof Deno.version.deno !== "undefined";

export { isBrowser, isWebWorker, isNode, isJsDom, isDeno, isHappyDom };
