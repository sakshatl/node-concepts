const fs = require('node:fs');
const path = require('node:path');
const { Transform }  = require('stream');

const readStream = fs.createReadStream(path.resolve(__dirname, 'sample.txt'), {
  encoding: 'utf-8'
});

const writeStream = fs.createWriteStream(path.resolve(__dirname, 'untitled.txt'));

const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const uppercasedChunk = chunk.toString().toUpperCase();
    this.push(uppercasedChunk);
    callback();
  }
})

readStream.pipe(uppercaseTransform).pipe(writeStream);