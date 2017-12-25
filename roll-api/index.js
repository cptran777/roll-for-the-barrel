'use strict';
/****************************** INIT DEPENDENCIES ******************************/
// npm dependencies
const express = require('express');
const bodyparser = require('body-parser');
const routeHandler = require('./routes');

// init server application using express
const app = express();

/***************************** INIT CUSTOM MODULES *****************************/

/******************************* INIT MIDDLEWARE *******************************/
// Should allow us to use the assets inside the public folder in the client side codes
app.use(express.static(__dirname + '/../roll-web/dist/'));

app.use(bodyparser.json());

/********************************* INIT SERVER *********************************/
routeHandler(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port', port);
});