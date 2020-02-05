import React, { Component } from "react";
import Header from "../../components/views/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import DogContainer from "../../components/containers/Dog";

export default class LangingPage extends Component {
  render() {
    console.log("LangingPage");
    return (
      <div>
        <Container maxWidth="xl">
          <Header />
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          >
            <DogContainer />
          </Typography>
        </Container>
      </div>
    );
  }
}