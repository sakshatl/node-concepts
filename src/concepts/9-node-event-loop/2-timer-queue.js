console.log('start');

Promise.resolve().then(() => console.log('inside promise resolve'));
process.nextTick(() => console.log('inside process.nextTick'));
setTimeout(() => console.log('inside setTimeout'));

console.log('end');
