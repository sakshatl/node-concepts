const path = require('node:path');
const fs = require('node:fs');



// Read contents from a file (synchonous way)
const fileContentsSync = fs.readFileSync(path.resolve(__dirname, 'sample.txt'));
// console.log(fileContentsSync.toString()); // Buffer



// Read conteht from a file (async way)
fs.readFile(path.resolve(__dirname, 'sample.txt'), (err, data) => {
  if(err) throw new Error('Something went wrong while reading the file contents');
  console.log(data.toString());
});

// Write contents to a file (async way)
fs.writeFile(path.resolve(__dirname, 'untitled.txt'), "Hello World", (err) => {
  if(err) throw new Error('Something went wrong while writing the file contents')
});

