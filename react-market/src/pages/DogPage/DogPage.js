import React, { Component } from "react";
import HeaderContainer from "../../components/containers/HeaderContainer";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MainMiniDrawer from "../../components/containers/MainMiniDrawerContainer";
import DogContainer from "../../components/containers/DogContainer";

export default class DogPage extends Component {
  render() {
    console.log("LangingPage");
    return (
      <div>
        <Container maxWidth="xl">
          <MainMiniDrawer />
          {/* <HeaderContainer /> */}
          <Typography
            component="div"
            style={{ backgroundColor: "gray", height: "10000" }}
          >
            <DogContainer />
          </Typography>
          {/* <DogContainer /> */}
        </Container>
      </div>
    );
  }
}
