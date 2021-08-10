const express = require('express');
const cors = require('cors');
const app = express();
const controller = require('./controller.js');

app.use(cors());
app.use(express.json());

//  serve build folder when it is time for production environment
// app.use(express.static(__dirname + '/../build'));

//const database = require('../database/index.js');

const PORT = '3005';

// route(s)
app.get('/data', controller.getAllData);

// add a new ride
app.post('/add', controller.addNewRide);

app.post('/read', controller.readFile);

app.listen(PORT, (err, result) => {
  if (err) {
    console.log('There was an error starting the server!');
  } else {
    console.log(`Server listening on port ${PORT}!`);
  }
});