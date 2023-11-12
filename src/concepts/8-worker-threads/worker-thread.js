const { parentPort } = require('node:worker_threads');

// Blocking piece of code inside the worker thread
let j = 0;
while (j < 6_000_000_000) {
  j = j + 1;
}

// Exporting the value from workerthread using a method from "worker_threads" module
parentPort.postMessage(j);