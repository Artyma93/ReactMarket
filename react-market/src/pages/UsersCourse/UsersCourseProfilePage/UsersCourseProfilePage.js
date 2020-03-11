import React, { Component } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import UsersCourseProfileContainer from "../../../components/containers/UsersCourseProfileContainer";
import MainMiniDrawer from "../../../components/containers/MainMiniDrawerContainer";
export default class UsersCourseAutoPage extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="xl">
          <MainMiniDrawer userCource={<UsersCourseProfileContainer />} />
        </Container>
      </div>
    );
  }
}
