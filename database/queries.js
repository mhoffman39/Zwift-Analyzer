//Queries to database

//get all data from ridehistory database (mostly for testing)
module.exports.getAllData = `SELECT * FROM ridehistory`;

//get all power max and power average data from database
module.exports.getPowerData = 'SELECT date AS date, power_max AS power_max, power_avg AS power_avg FROM ridehistory'

//add ride data to db
module.exports.addNewRide = `INSERT INTO ridehistory ( date, duration, power_avg, power_max, hr_avg, hr_max, distance, calories, cadence_avg) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;