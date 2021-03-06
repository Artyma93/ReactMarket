import React, { Component } from "react";
import HeaderContainer from "../../../components/containers/HeaderContainer";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import UsersCourseContainer from "../../../components/containers/UsersCourseContainer";
import MainMiniDrawer from "../../../components/containers/MainMiniDrawerContainer";
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
