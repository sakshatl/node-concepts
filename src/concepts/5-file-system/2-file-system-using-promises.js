const fs = require('node:fs/promises');
const path = require('node:path');

fs.readFile(path.resolve(__dirname, 'sample.txt'))
  .then(data => {
    console.log(data);
    console.log(data.toString());
  })
  .catch(err => {
    console.log(err.message);
  });

fs.writeFile(path.resolve(__dirname, 'untitled.txt'), 'HELLO WORLD')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })