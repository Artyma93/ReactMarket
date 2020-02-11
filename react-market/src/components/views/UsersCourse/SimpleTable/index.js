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
    error
  } = props;

  return (
    <React.Fragment>
      <Container maxWidth="lg" width={100}>
        <div className="App">
          {usersCourseTable ? (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>date</TableCell>
                    <TableCell>temperatureC</TableCell>
                    <TableCell>temperatureF</TableCell>
                    <TableCell>summary</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usersCourseTable.map(row => (
                    <TableRow key={row.date}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.temperatureC}</TableCell>
                      <TableCell>{row.temperatureF}</TableCell>
                      <TableCell>{row.summary}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <p className="App-intro">Replace the React icon with a users!</p>
          )}

          {fetching ? (
            <button disabled>Fetching...</button>
          ) : (
            <button onClick={onRequestUsersCourse}>
              Request a UsersCourse
            </button>
          )}

          {error && (
            <p style={{ color: "red" }}>Uh oh - something went wrong!</p>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
}
