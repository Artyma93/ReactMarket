import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Routing from "../../routes/route";

import Routing from "../../../routes/route";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routing />
      </Router>
    );
  }
}
