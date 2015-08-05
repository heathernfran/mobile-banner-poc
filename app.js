http = require('http');

server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-type': 'text/html; charset=utf-8;'
  });
  res.end('end response');
});

server.listen(1337);
