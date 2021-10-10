import React, { Component } from "react";
import Page from "./components/Page";
import data1 from "./data/data-1.json";
import data2 from "./data/data-2.json";

class App extends Component {
  render() {
    return (
      <div>
        <Page data={data1} />
        <Page data={data2} />
      </div>
    );
  }
}
export default App;
