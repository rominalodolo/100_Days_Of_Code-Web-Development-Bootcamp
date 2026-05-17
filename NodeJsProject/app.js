const http = require('http');

function handleRequest(request, response) {

  if(request.url === '/currenttime') {
    const currentTime = new Date().toLocaleTimeString();
    response.statusCode = 200;
    response.end(`<h1>Current Time: ${currentTime}</h1>`);
    return;
  }
  // localhost:3000/currenttime;
  // localhost:3000/currentdate;
  // response.statusCode = 404;

  response.statusCode = 200;
  response.end('<h1>Hello, World!</h1>');
}

const server = http.createServer(handleRequest);



server.listen(3000);

