const express = require('express');

const app = express();

app.get('/currenttime', (req, res) => {
  res.send('<h1>' + new Date().toISOString() + '</h1>');
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page!</h1>');
    });

app.get('/form', (req, res) => {
    res.send('<form><label>Your Name:</label><input type="text" name="name"></form>');
});

app.listen(3000)


