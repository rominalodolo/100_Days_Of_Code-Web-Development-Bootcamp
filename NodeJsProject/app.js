const http = require('http');

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
  // localhost:3000/currenttime;
  // localhost:3000/currentdate;
  // response.statusCode = 404;

  // response.statusCode = 200;
  // response.end('<h1>Hello, World!</h1>');
}

const server = http.createServer(handleRequest);



server.listen(3000);

