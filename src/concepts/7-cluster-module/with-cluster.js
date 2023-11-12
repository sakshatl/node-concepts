const cluster = require('node:cluster');
const http = require('node:http');
const os = require("node:os");

function main() {
  if(cluster.isMaster) {
    // inside the cluster master
    console.log(`Master process ${process.pid} is running`);

    const cpuCores = os.cpus().length;
    for (let i = 0; i < cpuCores; i++) {
      // Create child processes (workers)
      cluster.fork();
    }
  } else {
    // inside the child process
    console.log(`Child process (worker) ${process.pid} started`);

    // Handle incoming requests and CPU intensive operations inside child processes 
    createHTTPServer();
  }
}

function createHTTPServer() {
  const server = http.createServer((req, res) => {
    if(req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Homepage");
    }
  
    if(req.url === "/slow") {
      (() => {
        // Blocking code
        let i = 0;
        while (i < 6_000_000_000) {
          i = i + 1;
        }
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Slow page ${i}`);
      })();
    }  
  });

  server.listen(8080, () => console.log(`Server is up and running on http://localhost:8080`));
}

main();

