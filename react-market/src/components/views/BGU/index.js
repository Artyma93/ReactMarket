import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SimpleTable from "./SimpleTable";
import styles from "./usersCourseAuto.module.css";

export default class BGU extends Component {
  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
  };
  render() {
    const {
      fetching,
      budget,
      error,
      pageSize,
      totalUsersCount,
      currentPage
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
              budget={budget}
              error={error}
              currentPage={currentPage}
            />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
