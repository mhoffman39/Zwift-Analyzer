const pool = require('./index');
const queries = require('./queries.js');


module.exports.getAllData = async () => {
  try {
    const response = await pool.query(queries.getAllData);
    return response.rows;
  }
  catch (error) {
    // console.log(error);
    return error;
  }
};

module.exports.getPowerData = async () => {
  try {
    const response = await pool.query(queries.getPowerData);
    return response.rows;
  }
  catch (error) {
    return error;
  }
};

module.exports.getHRData = async () => {
  try {
    const response = await pool.query(queries.getHRData);
    return response.rows;
  }
  catch (error) {
    return error;
  }
};

module.exports.getCadenceData = async () => {
  try {
    const response = await pool.query(queries.getCadenceData);
    return response.rows;
  }
  catch (error) {
    return error;
  }
};

module.exports.getCumulativeData = async () => {
  try {
    const response = await pool.query(queries.getCumulativeData);
    return response.rows;
  }
  catch (error) {
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