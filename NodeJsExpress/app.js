const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: flase }));

app.get('/currenttime', (req, res) => {
  res.send('<h1>' + new Date().toISOString() + '</h1>');
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page!</h1>');
    });

app.get('/form', (req, res) => {
    res.send('<form action="/submit" method="post"><label>Your Name:</label><input type="text" name="username"> <button type="submit">Submit</button></form>');
});

app.post('/store-user',function(req, res) {
    const userName = req.body.username; // Access the username from the form data
    console.log('Received username:', userName); // Log the username to the console
    res.send('<h1>Thank you for submitting your name, ' + userName + '!</h1>'); // Send a response back to the client
});

app.listen(3000)