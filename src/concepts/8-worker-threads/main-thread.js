const http = require('node:http');
const path = require('node:path');
const { Worker } = require('node:worker_threads');


const server = http.createServer((req, res) => {
  if(req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Homepage");
  }

  if(req.url === "/slow") {
    // A) Without worker_thread module

    (() => {
      // Blocking code
      let j = 0;
      while (j < 6_000_000_000) {
        j = j + 1;
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Slow page ${j}`);
    })();

    // B) With worker_thread module

    // === UN-COMMENT STARTS HERE ===

    // (() => {
    //   const worker = new Worker(path.resolve(__dirname, "worker-thread.js"));
    //   worker.on("message", (data) => {
    //     res.writeHead(200, { "Content-Type": "text/plain" });
    //     res.end("Slow page");
    //   });
    // })();

    // === UN-COMMENT ENDS HERE ===
  }

});

server.listen(8080, () => console.log(`Server up and running on http://localhost:8080`));