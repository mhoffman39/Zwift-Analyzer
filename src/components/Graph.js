import React from 'react';

const Graph = ({ data }) => {
  console.log(typeof data[0].row)
  return(
    <h1>{data[0].row}</h1>
  )
}

export default Graph;

//Need data formatted in : [{date: '10 Jan 2021', power_avg: 100, power_max: 200}]

//Current:     {"row": "(2021-08-07,202,113)"}