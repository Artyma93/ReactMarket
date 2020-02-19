import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SimpleTable from "./SimpleTable";
import styles from "./usersCourseAuto.module.css";

export default class UsersCourseAuto extends Component {
  render() {
    const {
      fetching,
      usersCourseTable,
      onRequestUsersCourse,
      error,
      pageSize,
      totalUsersCount,
      currentPage,
      setCurrentPage
    } = this.props;

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    console.log(
      "totalUsersCount: " +
        totalUsersCount +
        " pageSize: " +
        pageSize +
        " pagesCount: " +
        pagesCount
    );
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
                  <span
                    className={currentPage === p && styles.selectedPage}
                    onClick={() => {setCurrentPage(p)}}
                  >
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
