import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SimpleCard from "./SimpleCard";

export default class UsersCourseLogin extends Component {
  render() {
    return (
      <React.Fragment>
        <Container maxWidth="sm" width={100}>
          {/* <p>UsersCourseProfile</p> */}
          <SimpleCard {...this.props}/>
        </Container>
      </React.Fragment>
    );
  }
}
