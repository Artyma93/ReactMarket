import React, { Component } from "react";
import HeaderContainer from "../../components/containers/HeaderContainer";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MainMiniDrawer from "../../components/containers/MainMiniDrawerContainer";
import { CalendarContainer } from "../../components/containers/CalendarContainer";

import DateFnsLocalizationExample from "../../components/views/CalendarView/index2.js";

export default class TestPage extends Component {
  render() {
    return (
      <>
        <div>
          <h1>TestPage</h1>
          <CalendarContainer />
        </div>
        <div>
          <DateFnsLocalizationExample />
        </div>
      </>
    );
  }
}
