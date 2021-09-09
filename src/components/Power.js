import React, { useState } from 'react';
import axios from 'axios';
import Graph from './Graph';

const Power = ({ count }) => {
  const [power, setPower] = useState([]);

  const getPower = () => {
    if (power.length === 0) {
      axios.get('http://localhost:3005/data/power')
      .then(function (res) {
        //console.log('Power: ', res.data)
        setPower(res.data);
        return (
          <Graph data={power}/>
        )
      })
      .catch(function (res) {
        console.log(res)
      })
    } else {
      return (
        <Graph data={power}/>
      )
    }
  };
  return (
    <div className="individualGraph">
      <h2>Power Data</h2>
      {getPower()}
    </div>
  )
}

export default Power;