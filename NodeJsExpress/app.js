const express = require('express');

const app = express();

function handleRequest(request, response) {

  if(request.url === '/currenttime') {
    response.statusCode = 200;
    response.end('<h1>' + new Date().toISOString() + '</h1>');
    return;
  } else if (request.url ==='/') {
    response.statusCode = 200;
    response.end('<h1>Welcome to the Home Page!</h1>');
    return;
  }
}

const server = http.createServer(function);



server.listen(3000);

