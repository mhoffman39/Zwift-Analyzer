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
    <div>
      <h2>Cumulative Data</h2>
      <div>
        <h3>{duration}</h3>
        <h3>{distance}</h3>
        <h3>{calories}</h3>
      </div>
    </div>
  )
};

export default Cumulative;