import React from "react";
import "./Table.css";
const Table = (props) => {
  return (
    <>
      <div className="container">
        {props.data.payload.costData.serviceCosts.map((data, dataIndex) => {
          let c = props.colors[dataIndex];
          var opticity = props.op.flag && props.op.index !== dataIndex;
          return (
            <div
              key={data.id}
              className="flex-container"
              style={{ opacity: opticity ? "0.2" : "1" }}
            >
                <div id="color" style={{ background: c }}></div>
                <div id="name">{data.fullName}</div>

              <div id="amount">
                {(data.amount.currencyCode === "USD" ? "$" : "₹") +
                  data.amount.amount}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {props.data.payload.costData.taxValue.map((data, dataIndex) => {
          return (
            <div key={data.id} className="flex-container">
              <div className="flex-item" id="name">
                {data.fullName}
              </div>
              <div className="flex-item" id="amount">
                {(data.amount.currencyCode === "USD" ? "$" : "₹") +
                  data.amount.amount}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex-container" id="total">
        <div className="flex-item" id="name">
          Total
        </div>
        <div className="flex-item" id="amount">
          {(props.data.payload.costData.totalCost.amount.currencyCode === "USD"
            ? "$"
            : "₹") + props.total.toFixed(2)}
        </div>
      </div>
    </>
  );
};

export default Table;
