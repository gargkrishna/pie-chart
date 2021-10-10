import React, { Component } from "react";
import Slice from "./Slice";
import Table from "./Table";
import "./Pie.css";
class Pie extends Component {
  state = {
    index: 0,
    flag: false,
  };
  render() {
    var colors = this.props.colors,
      colorsLength = colors.length,
      labels = this.props.labels,
      hole = this.props.hole,
      radius = this.props.radius,
      diameter = radius * 2,
      self = this,
      startAngle,
      sum;

    sum = this.props.d.reduce(function (carry, current) {
      return carry + current;
    }, 0);
    startAngle = 0;
    var flagChanger = (index) => {
      var flag = this.state.flag;
      if (index === this.state.index) flag = !this.state.flag;
      else if (!flag && index !== this.state.index) flag = true;
      this.setState({
        index: index,
        flag: flag,
      });
    };
    var op = this.state;
    var individual =
      this.props.data.payload.costData.serviceCosts[op.index].amount;
    return (
      <>
        <div id="pie">
          <svg
            width={diameter}
            height={diameter}
            viewBox={"0 0 " + diameter + " " + diameter}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            {this.props.d.map(function (slice, sliceIndex) {
              var angle, nextAngle, percent;
              nextAngle = startAngle;
              angle = (slice / sum) * 360;
              percent = (slice / sum) * 100;
              startAngle += angle;
              var opticity = op.flag && op.index !== sliceIndex;
              return (
                <Slice
                  key={sliceIndex}
                  index={sliceIndex}
                  opticity={opticity}
                  flagChanger={flagChanger}
                  value={slice}
                  percent={self.props.percent}
                  percentValue={percent.toFixed(1)}
                  startAngle={nextAngle}
                  angle={angle}
                  radius={radius}
                  hole={radius - hole}
                  trueHole={hole}
                  showLabel={labels}
                  fill={colors[sliceIndex % colorsLength]}
                  stroke={self.props.stroke}
                  strokeWidth={self.props.strokeWidth}
                />
              );
            })}
            <g>
              {
                <text x={120} y={130} fill="#00000" textAnchor="middle" fontSize={"30px"}>
                  {(individual.currencyCode === "USD" ? "$" : "₹")}
                  {this.state.flag
                    ? individual.amount
                    : this.props.total.toFixed(2)}
                </text>
              }
            </g>
          </svg>
        </div>
        <Table
          id="table"
          data={this.props.data}
          total={this.props.total}
          colors={this.props.colors}
          op={op}
        />
      </>
    );
  }
}

export default Pie;
