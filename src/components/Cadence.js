import React, { useState } from 'react';
import axios from 'axios';
import Graph from './Graph';

const Cadence = () => {
  const [cadence, setCadence] = useState([]);

  const getCadence = () => {
    if (cadence.length === 0) {
      axios.get('http://localhost:3005/data/cadence')
      .then(function (res) {
        //console.log('Cadence: ', res.data)
        setCadence(res.data);
        return (
          <Graph data={cadence}/>
        )
      })
      .catch(function (res) {
        console.log(res)
      })
    } else {
      return (
        <Graph data={cadence}/>
      )
    }
  };
  return (
    <div className="individualGraph">
      <h2>Average Cadence</h2>
      {getCadence()}
    </div>
  )
}

export default Cadence;