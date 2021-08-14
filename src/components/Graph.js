import React from 'react';

const Graph = ({ data }) => {
  console.log(data)
  return(
    <div>
      <h1>Graph here</h1>
      <h1>{data[0].date}</h1>
    </div>
  )
}

export default Graph;
