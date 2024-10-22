import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', pv: 2400, uv: 2000 },
  { name: 'Feb', pv: 1398, uv: 9800 },
  { name: 'Mar', pv: 9800, uv: 3908 },
  { name: 'Apr', pv: 3908, uv: 4800 },
  { name: 'May', pv: 4800, uv: 4900 },
  { name: 'Jun', pv: 4300, uv: 4000 },
];

const ChartWidget = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default ChartWidget;
