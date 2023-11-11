const path = require('node:path');

console.log(__dirname);
console.log(__filename);

// Return the last portion of a path.
console.log(path.basename(__dirname));
console.log(path.basename(__filename));

// Return the extension of the path
console.log(path.extname(__filename));
console.log(path.extname(__dirname)); // will return empty string

// Return an object with sugnificant properties of a path
console.log(path.parse(__filename));

// Check if a path is absolute path or not
console.log(path.isAbsolute(__filename)); // true
console.log(path.isAbsolute('./1-os-module.js')); // false, relative path

// Join all the given paths together, using platform specific seperator as delimiter
console.log(path.join('folder1', 'folder2', 'index.html'));
console.log(path.join(__dirname, 'index.html'));

// Resolve a sequence of path or paths into an absolute path
console.log(path.resolve('folder1', 'folder2', 'index.html'))

