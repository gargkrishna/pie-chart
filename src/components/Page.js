import React from "react";
import Pie from "./Pie";
import "./page.css";

const Page = (props) => {
  var d = [];
  var total = 0;
  props.data.payload.costData.serviceCosts.map((data) => {
    total += parseFloat(data.amount.amount);
    return d.push(parseFloat(data.amount.amount));
  });
  var colors = [
    "#1e90ff",
    "#808000",
    "#daa520",
    "#ff7f50",
    "#b22222",
    "#ff1493",
    "#2BDFBB",
    "#DF2B4F",
    "#EE6617",
    "#FFBF00",
    "#423E6E",
    "#E24161",
    "#FF55FF",
    "#0057E7",
    "#D62D20",
    "#008744",
    "#FFA700",
    "#0057E7",
  ];
  colors.splice(0, Math.floor(Math.random() * (colors.length - d.length)));
  return (
    <div className="container">
      <div id="main-heading">{props.data.payload.chartMetaData.chartTitle}</div>
      <div id="sub-heading">
        {props.data.payload.chartMetaData.chartDescription}
      </div>
      <div>
        <Pie
          total={total}
          d={d}
          data={props.data}
          radius={120}
          hole={80}
          colors={colors}
          labels={false}
          percent={false}
          strokeWidth={2}
          stroke={"#fff"}
        />
      </div>
    </div>
  );
};

export default Page;
