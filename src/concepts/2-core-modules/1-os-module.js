const os = require('node:os');

// OS Platform
console.log(os.platform());

// Current users' home directory
console.log(os.homedir());

// Amount of total system memory in bytes
console.log(os.totalmem());

// Amount of free system memory in bytes
console.log(os.freemem());

// Hostname of operating systme
console.log(os.hostname());

// CPU Architecture
console.log(os.arch());

// Array of each logical CPU core
console.log(os.cpus());

// Network interfaces
console.log(os.networkInterfaces());

// System uptime in number of seconds
console.log(os.uptime());
