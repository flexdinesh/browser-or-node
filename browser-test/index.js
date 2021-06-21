'use strict';

import { isBrowser, isWebWorker, isNode } from './browser-or-node.js';

console.log = (message) => {
	document.getElementById('console').value += message + '\n';
}

console.log('Web page reports:');
console.log('  isBrowser: ' + isBrowser);
console.log('  isWebWorker: ' + isWebWorker);
console.log('  isNode: ' + isNode);

if (window.Worker) {
	const myWorker = new Worker("worker.js");

	myWorker.onmessage = function(e) {
		const _res = e.data;
		
		console.log('Web worker reports:');
		console.log('  isBrowser: ' + e.data[0]);
		console.log('  isWebWorker: ' + e.data[1]);
		console.log('  isNode: ' + e.data[2]);
	}
	myWorker.postMessage(['Report, please']);

} else {
	console.log('Your browser doesn\'t support web workers.')
}
