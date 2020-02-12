import React, { Component } from "react";
import HeaderContainer from "../../components/containers/Header";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import DogContainer from "../../components/containers/Dog";
import MiniDrawer from "../../components/views/MiniDrawer";
import MainMiniDrawer from "../../components/views/MainMiniDrawer";

export default class LangingPage extends Component {
  render() {
    console.log("LangingPage");

    return (
      <div>
        <Container maxWidth="xl">
          {/* <HeaderContainer /> */}
          <Typography
            component="div"
            style={{ backgroundColor: "gray", height: "10000" }}
          >
            {/* <DogContainer /> */}
            {/* <MiniDrawer /> */}
            <MainMiniDrawer />
          </Typography>
        </Container>
      </div>
    );
  }
}
