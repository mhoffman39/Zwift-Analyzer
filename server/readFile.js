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
        let session_date = data.events[0].timestamp.toString();
        let session_duration_mins = data.laps[0].total_elapsed_time / 60;
        let session_power_avg = data.sessions[0].avg_power;
        let session_power_max = data.sessions[0].max_power;
        let session_hr_avg = data.sessions[0].avg_heart_rate;
        let session_hr_max = data.sessions[0].max_heart_rate;
        let session_distance = data.sessions[0].total_distance;
        let session_calories = data.sessions[0].total_calories;
        let session_cadence_avg = data.sessions[0].avg_cadence;
      }
    });
  });