const fs = require('fs');
require path = require('path');

const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/currenttime', (req, res) => {
  res.send('<h1>' + new Date().toISOString() + '</h1>');
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page!</h1>');
    });

app.get('/form', (req, res) => {
    res.send('<form action="/store-user" method="post"><label>Your Name:</label><input type="text" name="username"> <button type="submit">Submit</button></form>');
});

app.post('/store-user',function(req, res) {
    const userName = req.body.username; // Access the username from the form data

    const filePath = path.join(__dirname, 'data', 'users.json'); // Define the path to the file where you want to store the username

    const fileData = fs.readFileSync(filePath); // Read the existing data from the file

    
    fs.writeFileSync(filePath, JSON.stringify([userName])); // Write the username to the file (you can modify this to append to an array if you want to store multiple usernames)
    console.log('Received username:', userName); // Log the username to the console
    res.send('<h1>Thank you for submitting your name, ' + userName + '!</h1>'); // Send a response back to the client
});

app.listen(3000)