import React, { Component } from "react";
import logo from "../../../assets/img/logo.svg";
import Container from "@material-ui/core/Container";
import SimpleTable from "./SimpleTable";

export default class Weatherforecast extends Component {
  render() {
    const {
      fetching,
      weatherforecastTable,
      onRequestWeatherforecast,
      error
    } = this.props;
    // console.log("Weatherforecast");
    // console.log(weatherforecastTable);
    // debugger
    return (
      <React.Fragment>
        <Container maxWidth="lg" width={100}>
          <div className="App">
            <SimpleTable
              fetching={fetching}
              weatherforecastTable={weatherforecastTable}
              onRequestWeatherforecast={onRequestWeatherforecast}
              error={error}
            />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
