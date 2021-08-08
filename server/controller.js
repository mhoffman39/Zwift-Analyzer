const db = require('../database/model.js');

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