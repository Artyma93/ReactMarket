import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SimpleTable from "./SimpleTable";
import styles from "./usersCourse.module.css";

export default class UsersCourse extends Component {
  render() {
    const {
      fetching,
      usersCourseTable,
      onRequestUsersCourse,
      error,
      pageSize,
      totalUsersCount,
      currentPage
    } = this.props;

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <React.Fragment>
        <Container maxWidth="lg" width={100}>
          <div className="App">
            <div>
              {pages.map(p => {
                return (
                  <span className={currentPage === p && styles.selectedPage}>
                    {p}
                  </span>
                );
              })}
            </div>
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
