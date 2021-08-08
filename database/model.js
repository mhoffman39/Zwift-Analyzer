const pool = require('./index');
const queries = require('./queries.js');


module.exports.getAllData = async () => {
  try {
    console.log('test')
    const response = await pool.query(queries.getAllData);
    if (response.rows[0]) {
      //const userID = response.rows[0].id;
      console.log(response.rows)
      // return userID;
    } else {
      return null;
    }
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

module.exports.addNewRide = async (date, duration, power_avg, power_max, hr_avg, hr_max, distance, calories, cadence) => {
  try {
    let response = await pool.query(queries.addNewRide, [date, duration, power_avg, power_max, hr_avg, hr_max, distance, calories, cadence]);
    return response;
  } catch (error) {
    return error;
  }
};