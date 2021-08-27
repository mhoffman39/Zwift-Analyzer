import React, { useState } from 'react';
import axios from 'axios';

const Cumulative = () => {
  const [duration, setDuration] = useState();
  const [distance, setDistance] = useState();
  const [calories, setCalories] = useState();

  axios.get('http://localhost:3005/data/cumulative')
  .then(function (res) {
    setDuration(res.data[0].duration);
    setDistance(res.data[0].distance);
    setCalories(res.data[0].calories);
  })
  .catch(function (res) {
    console.log(res)
  })

  return (
    <div className="cumulative">
      <h3>Cumulative Data</h3>
      <div>
        <h4>{duration} Minutes</h4>
        <h4>{distance} Miles</h4>
        <h4>{calories} Calories</h4>
      </div>
    </div>
  )
};

export default Cumulative;