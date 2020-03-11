import React, { Component } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MainMiniDrawer from "../../../components/containers/MainMiniDrawerContainer";
import UsersCourseLoginContainer from "../../../components/containers/UsersCourseLoginContainer";

export default class UsersCourseLoginPage extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="xl">
          <MainMiniDrawer userCource={<UsersCourseLoginContainer />} />
        </Container>
      </div>
    );
  }
}
