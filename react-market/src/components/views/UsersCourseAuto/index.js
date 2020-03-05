import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SimpleTable from "./SimpleTable";
import styles from "./usersCourseAuto.module.css";
import { Redirect } from "react-router-dom";

export default class UsersCourseAuto extends Component {
  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
  };
  render() {
    const {
      fetching,
      usersCourseTable,
      error,
      pageSize,
      totalUsersCount,
      currentPage,
      UsersCourseAutoFollowedStart,
      isfollowingInProgress
    } = this.props;

    const { onPageChanged } = this;

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
                  <span
                    className={currentPage === p && styles.selectedPage}
                    onClick={e => {
                      onPageChanged(p);
                    }}
                  >
                    {p}
                  </span>
                );
              })}
            </div>
            <SimpleTable
              fetching={fetching}
              usersCourseTable={usersCourseTable}
              error={error}
              currentPage={currentPage}
              UsersCourseAutoFollowedStart={UsersCourseAutoFollowedStart}
              isfollowingInProgress={isfollowingInProgress}
            />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
