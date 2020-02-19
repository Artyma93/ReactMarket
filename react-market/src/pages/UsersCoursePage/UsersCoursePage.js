import React, { Component } from "react";
import HeaderContainer from "../../components/containers/Header";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import UsersCourseContainer from "../../components/containers/UsersCourse";
import MainMiniDrawer from "../../components/views/MainMiniDrawer";
export default class UsersCoursePage extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="xl">
          <MainMiniDrawer userCource={<UsersCourseContainer />}/>
          {/* <HeaderContainer /> */}
          <Typography
            component="div"
            style={{ backgroundColor: "gray", height: "10000" }}
          >
            {/* <UsersCourseContainer /> */}
          </Typography>
        </Container>
      </div>
    );
  }
}
