module.exports.read = () => {

  // Define variables to be retrieved from .FIT file
  let session_date, session_duration_mins, session_power_avg, session_power_max, session_hr_avg, session_hr_max, session_distance, session_calories, session_cadence_avg;

  // Require the module
  var FitParser = require('fit-file-parser').default;
  // Read a .FIT file
  var fs = require('fs');
    fs.readFile('./2020-09-23-14-14-40.fit', (err, content) => {

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

      console.log('Date: ', session_date, typeof(session_date));
      console.log('Duration: ', session_duration_mins, typeof(session_duration_mins));
      console.log('Power Average: ', session_power_avg);
      console.log('Power Max: ', session_power_max);
      console.log('HR Average: ', session_hr_avg);
      console.log('HR Max: ', session_hr_max);
      console.log('Distance: ', session_distance);
      console.log('Calories: ', session_calories);
      console.log('Cadence Average: ', session_cadence_avg);
    });
}


