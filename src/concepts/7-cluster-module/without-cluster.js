const http = require('node:http');

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

