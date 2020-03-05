import React, { Component } from "react";
import HeaderContainer from "../../components/containers/HeaderContainer";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import DogContainer from "../../components/containers/DogContainer";
import WeatherforecastContainer from "../../components/containers/WeatherforecastContainer";
import MainMiniDrawer from "../../components/containers/MainMiniDrawerContainer";
export default class WeatherforecastPage extends Component {
  render() {
    // console.log("LangingPage");
    return (
      <div>
        <Container maxWidth="xl">
          <MainMiniDrawer />
          {/* <HeaderContainer /> */}
          <Typography
            component="div"
            style={{ backgroundColor: "gray", height: "10000" }}
          >
            <WeatherforecastContainer />
          </Typography>
          {/* <DogContainer /> */}
        </Container>
      </div>
    );
  }
}
