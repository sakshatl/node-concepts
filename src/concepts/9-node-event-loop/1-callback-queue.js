/*
  The microtask queue consists of 2 queues -
  1. next tick queue
  2. promise queue
*/

console.log(1);

Promise.resolve().then(() => console.log('inside promise resolve'));
process.nextTick(() => console.log('inside process.nextTick'));

console.log(3);


/*  
  Execution order:
  - synchonous code is excuted first
  - process.nextTick
  - promises
*/

