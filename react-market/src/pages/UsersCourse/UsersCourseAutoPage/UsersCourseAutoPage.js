import React, { Component } from "react";
import HeaderContainer from "../../../components/containers/HeaderContainer";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// import UsersCourseAutoContainer from "../../components/containers/UsersCourseAutoContainer";
import UsersCourseAutoContainer from "../../../components/containers/UsersCourseAutoContainer";
import MainMiniDrawer from "../../../components/containers/MainMiniDrawerContainer";
export default class UsersCourseAutoPage extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="xl">
          <MainMiniDrawer userCource={<UsersCourseAutoContainer />} />
          {/* <HeaderContainer /> */}
          <Typography
            component="div"
            style={{ backgroundColor: "gray", height: "10000" }}
          >
            {/* <UsersCourseAutoContainer /> */}
          </Typography>
        </Container>
      </div>
    );
  }
}
