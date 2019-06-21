const http = require('http');
const fs = require('fs');
const PORT = 3050;

const server = http.createServer((req, res) => {
  
  switch (req.url) {
    case '/':
      fs.readFile('./index.html', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      })
      break

    case '/hello':
      fs.readFile('./hello.html', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      })
      break

    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>Not found!</h1>');
  }

});

server.listen(PORT, () => {
  console.log('Server is running...');
});