const express = require('express');

const app = express();

app.get('/currenttime', (req, res) => {
  res.status(200).send('<h1>' + new Date().toISOString() + '</h1>');
});


app.listen(3000)


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

