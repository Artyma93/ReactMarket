import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "../../routes/route";

export default class App extends React.Component {
  render() {
    // console.log("app");
    return (
      <Router>
        <Routing />
      </Router>
    );
  }
}
