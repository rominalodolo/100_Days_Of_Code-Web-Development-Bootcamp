# Milestone Project - Complete online shop 



## Project Setup


Install: 
`npm init -y` 
`npm install express`
`npm install --save-dev` (nodemon)

Update your package json script:
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
  to 
```
scripts": {
    "start": "nodemon app.js"
  },


add your appjs file to spin up the server:
Starter code for app to run. 
```
const express = require('express');

const app = express();

app.listen(3000);
```

Then set up project structure: 
- make views, models & then controller folders.

Next step is adding 