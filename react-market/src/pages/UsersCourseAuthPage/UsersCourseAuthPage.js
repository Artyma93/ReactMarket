import React, { Component } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import UsersCourseAuthContainer from "../../components/containers/UsersCourseAuthContainer";
import MainMiniDrawer from "../../components/views/MainMiniDrawer";
export default class UsersCourseAutoPage extends Component {
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
