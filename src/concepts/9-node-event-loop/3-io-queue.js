const fs = require('node:fs');

console.log(1);

fs.readFile(__filename, () => {
  console.log('inside fs.readFile');
});

Promise.resolve().then(() => console.log('inside promise resolve'));
process.nextTick(() => console.log('inside process.nextTick'));

console.log(2);

/*
  Execution order:
  - sync code
  - callback queues
    - process.nextTick
    - promises
  - I/O queue (fs.readFile)
*/