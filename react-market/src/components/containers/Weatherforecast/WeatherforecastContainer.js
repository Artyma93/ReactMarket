import React from "react";
import Weatherforecast from "../../views/Weatherforecast";
import { connect } from "react-redux";
import * as actions from "./WeatherforecastActions";

class WeatherforecastContainer extends React.Component {
  render() {
    // console.log("WeatherforecastContainer");
    // debugger
    const { fetching, weatherforecastTable, onRequestWeatherforecast, error } = this.props;
    return (
      <React.Fragment>
        <Weatherforecast
          fetching={fetching}
          weatherforecastTable={weatherforecastTable}
          onRequestWeatherforecast={onRequestWeatherforecast}
          error={error}
        />
      </React.Fragment>
    );
  }
}

// const mapStateToProps = store => {
//   return {
//     fetching: store.dogState.fetching,
//     dog: store.dogState.dog,
//     error: store.dogState.error
//   };
// };

const mapStateToProps = ({ weatherforecastState: { fetching, weatherforecastTable, error }})  => {
  return {
    fetching: fetching,
    weatherforecastTable: weatherforecastTable,
    error: error
  };
};

export default connect(mapStateToProps, actions)(WeatherforecastContainer);
