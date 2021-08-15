import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Graph = ({ data }) => {
  console.log('Data: ',data)
  return(
    <div>
      <h1>Power Data</h1>
      <LineChart width={1000} height={400} data={data}>
        <Line type="monotone" dataKey="power_max" stroke="#8884d8" />
        <Line type="monotone" dataKey="power_avg" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" />
        {/* <XAxis dataKey="date" /> */}
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  )
}

export default Graph;

// Need to fix the date format or remove the date from the graph
// Need to change power query to have entries sorted by date
