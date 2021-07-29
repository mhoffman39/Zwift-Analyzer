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
        let date = data.events[0].timestamp.toString();
        let duration_minutes = data.laps[0].total_elapsed_time / 60;
        console.log(date, duration_minutes)
        //console.log(data.device_infos)
      }
    });
  });