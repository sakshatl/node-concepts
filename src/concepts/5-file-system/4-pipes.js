const fs = require('node:fs');
const path = require('node:path');

const readStream = fs.createReadStream(path.resolve(__dirname, 'sample.txt'), {
  encoding: 'utf-8'
});

const writeStream = fs.createWriteStream(path.resolve(__dirname, 'untitled.txt'));

readStream.pipe(writeStream);