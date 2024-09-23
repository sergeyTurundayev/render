const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end('<html><body><h1>Hello World</h1></body></html>');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
