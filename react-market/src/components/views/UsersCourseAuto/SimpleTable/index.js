import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function SimpleTable(props) {
  const classes = useStyles();
  const {
    fetching,
    usersCourseTable,
    onRequestUsersCourse,
    error,
    currentPage
  } = props;

  // console.log("currentPage: " + currentPage);
  const onRequestUsersCourseParam = e => {
    onRequestUsersCourse(currentPage);
  };

  return (
    <React.Fragment>
      <Container maxWidth="lg" width={100}>
        <div className="App">
          {usersCourseTable ? (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Names</TableCell>
                    {/* <TableCell>Status</TableCell>
                    <TableCell>Followed</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usersCourseTable.items.map(row => (
                    <TableRow key={row.id}>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <p className="App-intro">Download Users</p>
          )}

          {/* {fetching ? (
            <button disabled>Fetching...</button>
          ) : (
            <button onClick={onRequestUsersCourseParam}>
              Request a UsersCourse
            </button>
          )}

          {error && (
            <p style={{ color: "red" }}>Uh oh - something went wrong!</p>
          )} */}
        </div>
      </Container>
    </React.Fragment>
  );
}
