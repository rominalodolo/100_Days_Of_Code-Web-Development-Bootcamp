const http = require('http');

function handleRequest(request, response) {
  response.statusCode = 404;
}

const server = http.createServer();

server.listen(3000);