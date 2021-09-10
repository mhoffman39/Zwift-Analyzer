import React, { useState } from 'react';
import axios from 'axios';
import Graph from './Graph';

const HeartRate = () => {
  const [HR, setHR] = useState([]);

  const getHR = () => {
    if (HR.length === 0) {
      axios.get('http://localhost:3005/data/hr')
      .then(function (res) {
        for (let i = 0; i < res.data.length; i ++) {
          res.data[i].date = res.data[i].date.slice(0, 10);
        }
        setHR(res.data);
        return (
          <Graph data={HR}/>
        )
      })
      .catch(function (res) {
        console.log(res)
      })
    } else {
      return (
        <Graph data={HR}/>
      )
    }
  };
  return (
    <div className="individualGraph">
      <h2>HR Data</h2>
      {getHR()}
    </div>
  )
};

export default HeartRate;