

import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { day: "Mon", bookings: 4, revenue: 200 },
  { day: "Tue", bookings: 7, revenue: 350 },
  { day: "Wed", bookings: 3, revenue: 150 },
];

function ChartPages() {
  return (
    <div>
           {/* <Header/> */}
           <NavBar/>
  <h2 className="text-xl mb-4">Weekly Bookings</h2>
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
    </LineChart>
   
    </div>
  )
}

export default ChartPages
