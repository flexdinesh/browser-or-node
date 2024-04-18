const isBrowser: boolean =
  typeof window !== "undefined" && typeof window.document !== "undefined";

const isNode: boolean =
  // @ts-expect-error
  typeof process !== "undefined" &&
  // @ts-expect-error
  process.versions != null &&
  // @ts-expect-error
  process.versions.node != null;

const isWebWorker: boolean =
  typeof self === "object" &&
  self.constructor &&
  self.constructor.name === "DedicatedWorkerGlobalScope";

// https://github.com/jsdom/jsdom/issues/1537#issuecomment-229405327
const isJsDom: boolean =
  (typeof window !== "undefined" && window.name === "nodejs") ||
  (typeof navigator !== "undefined" &&
    "userAgent" in navigator &&
    typeof navigator.userAgent === "string" &&
    (navigator.userAgent.includes("Node.js") ||
      navigator.userAgent.includes("jsdom")));

const isDeno: boolean =
  // @ts-expect-error
  typeof Deno !== "undefined" &&
  // @ts-expect-error
  typeof Deno.version !== "undefined" &&
  // @ts-expect-error
  typeof Deno.version.deno !== "undefined";


/** @see {@link https://bun.sh/guides/util/detect-bun} */
  // @ts-expect-error
const isBun = typeof process !== "undefined" && process.versions != null && process.versions.bun != null;

export { isBrowser, isWebWorker, isNode, isJsDom, isDeno, isBun };
