const formidable = require('formidable');
const db = require('../database/model.js');
const util = require('util');
const FitParser = require('fit-file-parser').default;
const fs = require('fs');

module.exports.getAllData = async (req, res) => {
  try {
    let rideData = await db.getAllData();
    res.status(200).send(rideData);
  }
  catch (error) {
    res.status(500).send(error);
  }
};

module.exports.addNewRide = (req, res) => {
  const rideData = req.query;
  const date = rideData.date;
  const duration = rideData.duration;
  const power_avg = rideData.power_avg;
  const power_max = rideData.power_max;
  const hr_avg = rideData.hr_avg;
  const hr_max = rideData.hr_max;
  const distance = rideData.distance;
  const calories = rideData.calories;
  const cadence = rideData.cadence_avg;

  db.addNewRide(date, duration, power_avg, power_max, hr_avg, hr_max, distance, calories, cadence)
  .then(result => {
    res.status(200).send(result.toString());
  })
  .catch(err => {
    res.status(500).send(err);
  })
}

module.exports.readFile = (req, res) => {
  if (req.url === '/read' && req.method.toLowerCase() === 'post') {
    // Instantiate a new formidable form for processing
    var form = new formidable.IncomingForm();

    // form.parse analyzes the incoming stream data, picking apart the different fields and files for you.
    form.parse(req, function(err, fields, files) {
      if (err) {
        console.error(err.message);
        return;
      }
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      // Define variables to be retrieved from .FIT file
      let session_date, session_duration_mins, session_power_avg, session_power_max, session_hr_avg, session_hr_max, session_distance, session_calories, session_cadence_avg;

      // Read a .FIT file
      fs.readFile(files.myFile.path, (err, content) => {
        // Create a FitParser instance (options argument is optional)
        var fitParser = new FitParser({
          speedUnit: 'mph',
          lengthUnit: 'mi',
        });

        // Parse your file
        fitParser.parse(content, (error, data) => {
          // Handle result of parse method
          if (error) {
            console.log(error);
          } else {

            // Assigns data to variables
            session_date = data.events[0].timestamp.toString().slice(0, 15);
            session_duration_mins = data.laps[0].total_elapsed_time / 60;
            session_power_avg = data.sessions[0].avg_power;
            session_power_max = data.sessions[0].max_power;
            session_hr_avg = data.sessions[0].avg_heart_rate;
            session_hr_max = data.sessions[0].max_heart_rate;
            session_distance = data.sessions[0].total_distance;
            session_calories = data.sessions[0].total_calories;
            session_cadence_avg = data.sessions[0].avg_cadence;
          }
        });

        console.log('Date: ', session_date);
        console.log('Duration: ', session_duration_mins);
        console.log('Power Average: ', session_power_avg);
        console.log('Power Max: ', session_power_max);
        console.log('HR Average: ', session_hr_avg);
        console.log('HR Max: ', session_hr_max);
        console.log('Distance: ', session_distance);
        console.log('Calories: ', session_calories);
        console.log('Cadence Average: ', session_cadence_avg);

        res.end(util.inspect({fields: fields, files: files}));
      });

    });
    return;
  }


}