const fs = require('node:fs');
const path = require('node:path');

/*
  - A stream is a sequence of data that is being moved from one point to another
  - In case of streams we work in chunks of data instead of entire data to be available at once
  - This prevents unnecessary memory usage
  - Streams are available as built-in functionlaity of the 'node:fs' module
  - Stream inherit from the EventEmitter class 
*/

const readStream = fs.createReadStream(path.resolve(__dirname, 'sample.txt'), {
  encoding: 'utf-8'
});

const writeStream = fs.createWriteStream(path.resolve(__dirname, 'untitled.txt'));

readStream.on('data', (chunk) => {
  // console.log(chunk);
  writeStream.write(chunk);
});