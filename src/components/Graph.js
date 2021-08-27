import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graph = ({ data }) => {
  return(
    <div>
      <ResponsiveContainer width="100%" height={300} >
        <LineChart
          // width={1000}
          // height={400}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="max" stroke="#8884d8" />
          <Line type="monotone" dataKey="avg" stroke="#82ca9d" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
};

export default Graph;

// Need to fix the date format or remove the date from the graph
  //Map over input data and create a new object???

