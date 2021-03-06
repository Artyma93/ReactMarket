import React, { Component } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import UsersCourseAuthContainer from "../../../components/containers/UsersCourseAuthContainer";
import MainMiniDrawer from "../../../components/containers/MainMiniDrawerContainer";
export default class UsersCourseOwnProfilePage extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="xl">
          <MainMiniDrawer userCource={<UsersCourseAuthContainer />} />
        </Container>
      </div>
    );
  }
}
