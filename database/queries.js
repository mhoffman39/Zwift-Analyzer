//Queries to database

//get all data from ridehistory database (mostly for testing)
module.exports.getAllData = `SELECT * FROM ridehistory`;

//get all hr max and hr average data from database
module.exports.getHRData = 'SELECT date AS date, hr_max AS max, hr_avg AS avg FROM ridehistory ORDER BY date'

//get all power max and power average data from database
module.exports.getPowerData = 'SELECT date AS date, power_max AS max, power_avg AS avg FROM ridehistory ORDER BY date'

//get all cadence max and cadence average data from database
module.exports.getCadenceData = 'SELECT date AS date, cadence_avg AS avg FROM ridehistory ORDER BY date'

//get cumulative totals (calories, distance, duration)
module.exports.getCumulativeData = 'SELECT SUM(distance) AS distance, SUM(calories) AS calories, SUM(duration) AS duration FROM ridehistory'

//add ride data to db
module.exports.addNewRide = `INSERT INTO ridehistory ( date, duration, power_avg, power_max, hr_avg, hr_max, distance, calories, cadence_avg) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;




