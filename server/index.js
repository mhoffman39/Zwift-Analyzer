const express = require('express');
const cors = require('cors');
const app = express();
const controller = require('./controller.js');

app.use(cors());
app.use(express.json());

//  serve build folder when it is time for production environment
// app.use(express.static(__dirname + '/../build'));

const PORT = '3005';

app.listen(PORT, (err, result) => {
  if (err) {
    console.log('There was an error starting the server!');
  } else {
    console.log(`Server listening on port ${PORT}!`);
  }
});

// retrieve all ride data from db
app.get('/data', controller.getAllData);

//  retrieve power avg and power max for all rides
app.get('/data/power', controller.getPowerData);

//  retrieve HR avg and HR max for all rides
app.get('/data/hr', controller.getHRData);

//  retrieve cadence avg and cadence max for all rides
app.get('/data/cadence', controller.getCadenceData);

//  retrieve cumulative totals for duration, distance, and calories
app.get('/data/cumulative', controller.getCumulativeData);

// add a new ride to db
app.post('/data', controller.addNewRide);

// read .FIT file
app.post('/read', controller.readFile);
