# Milestone Project - Complete online shop 



## Project Setup


Install: 
`npm init -y` 
`npm install express`
`npm install --save-dev` (nodemon) or `npm i nodemon` (I needed to install it this way for my project to run the other command did not work for me that was suggested by the tutorial.)

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
- make views, models & then controller and routes folders.

Next step is adding other folders: 
- views: 
    - admin
    - cart
    - products 
    - auth
- routes
    - auth.routes.js


Next add this package: 
`npm install ejs`

then make app know to use this 
```
app.set('view engine', 'ejs');
app.set ('views',)
```

Mongo DB set up: 
Home terminal :
`$ brew install mongodb-atlas`

`$ atlas setup`

(Download Link)[https://www.mongodb.com/try/download/community]

`npm i mongodb`
`npm i connect-mongodb-session`

`npm i csurf` (depreciated)


`npm i bcryptjs` 
`npm i ejs`
`npm i express-session`
`npm i multer`