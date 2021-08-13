const formidable = require('formidable');
const db = require('../database/model.js');
const FitParser = require('fit-file-parser').default;
const fs = require('fs');

// from the GET/data route
// retrieves all data from database (testing)
module.exports.getAllData = async (req, res) => {
  try {
    let rideData = await db.getAllData();
    res.status(200).send(rideData);
  }
  catch (error) {
    res.status(500).send(error);
  }
};

// from the /data/power route
// retrieves power_avg and power_max data from the database
module.exports.getPowerData = async (req, res) => {
  try {
    let powerData = await db.getPowerData();
    res.status(200).send(powerData);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

// from the POST/data route
//  adds data from a single ride (FIT file) to the database
module.exports.addNewRide = (req, res) => {
  const rideData = req.body;
  const date = rideData.date;
  const duration = Math.floor(rideData.duration);
  const power_avg = rideData.power_avg;
  const power_max = rideData.power_max;
  const hr_avg = rideData.hr_avg;
  const hr_max = rideData.hr_max;
  const distance = Math.floor(rideData.distance);
  const calories = rideData.calories;
  const cadence = rideData.cadence;

  db.addNewRide(date, duration, power_avg, power_max, hr_avg, hr_max, distance, calories, cadence)
  .then(result => {
    res.status(200).send(result.toString());
  })
  .catch(err => {
    res.status(500).send(err);
  })
}

// from the POST/read route
//reads the FIT file and returns usable data
module.exports.readFile = (req, res) => {
  if (req.url === '/read' && req.method.toLowerCase() === 'post') {
    // Instantiate a new formidable form for processing
    var form = new formidable.IncomingForm();

    // analyze the incoming stream data, picking apart the different fields and files
    form.parse(req, function(err, fields, files) {
      if (err) {
        console.error(err.message);
        return;
      }
      // Define variables to be retrieved from .FIT file
      let session_date, session_duration, session_power_avg, session_power_max, session_hr_avg, session_hr_max, session_distance, session_calories, session_cadence_avg;

      // Read a .FIT file
      fs.readFile(files.fitFile.path, (err, content) => {
        // Create a FitParser instance with chosen options
        var fitParser = new FitParser({
          speedUnit: 'mph',
          lengthUnit: 'mi',
        });

        fitParser.parse(content, (error, data) => {
          // handle result of parse method
          if (error) {
            console.log(error);
          } else {
            // Assigns data to variables
            session_date = data.events[0].timestamp.toString().slice(0, 15);
            session_duration = data.laps[0].total_elapsed_time / 60;
            session_power_avg = data.sessions[0].avg_power;
            session_power_max = data.sessions[0].max_power;
            session_hr_avg = data.sessions[0].avg_heart_rate;
            session_hr_max = data.sessions[0].max_heart_rate;
            session_distance = data.sessions[0].total_distance;
            session_calories = data.sessions[0].total_calories;
            session_cadence_avg = data.sessions[0].avg_cadence;
          }
        });
        // packages variables up for response
        let object = {
          date: session_date,
          duration: session_duration,
          power_avg: session_power_avg,
          power_max: session_power_max,
          hr_avg: session_hr_avg,
          hr_max: session_hr_max,
          distance: session_distance,
          calories: session_calories,
          cadence: session_cadence_avg,
        }
        res.send(object);
        return;
      });
    });
    return;
  };
};