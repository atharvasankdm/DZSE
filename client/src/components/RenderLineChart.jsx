import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export const RenderLineChart = (props) => {
  //   console.log(height + " " + width);
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 800, pv: 9800, amt: 1200 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <LineChart width={props.width} height={props.height} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      {props.showAxes && (
        <>
          {" "}
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </>
      )}
      {/* <Tooltip />
          <Legend /> */}
      {/* You can add more lines by adding more <Line /> components with different dataKey and stroke props */}
    </LineChart>
  );
};
