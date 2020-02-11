import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SimpleTable from "./SimpleTable";

export default class UsersCourse extends Component {
  render() {
    const {
      fetching,
      usersCourseTable,
      onRequestUsersCourse,
      error
    } = this.props;

    return (
      <React.Fragment>
        <Container maxWidth="lg" width={100}>
          <div className="App">
            <SimpleTable
              fetching={fetching}
              usersCourseTable={usersCourseTable}
              onRequestUsersCourse={onRequestUsersCourse}
              error={error}
            />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
