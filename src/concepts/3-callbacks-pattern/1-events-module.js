const EventsEmitter = require('node:events');

const emitter = new EventsEmitter();

emitter.on('error', (err) => {
  console.log(`${err.message} at ${(new Date())}`);
});

try {
  throw new Error('Something went wrong');
} catch (err) {
  emitter.emit('error', err);
}


