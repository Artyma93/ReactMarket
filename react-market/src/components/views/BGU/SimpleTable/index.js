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

import Avatar from "@material-ui/core/Avatar";
// import { makeStyles } from '@material-ui/core/styles';

import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function SimpleTable(props) {
  const classes = useStyles();
  const { fetching, budget, error, currentPage } = props;

  // console.log("currentPage: " + currentPage);

  return (
    <React.Fragment>
      <Container maxWidth="lg" width={100}>
        <div className="App">
          {budget ? (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Академия</TableCell>
                    <TableCell align="center">Вид деятельности</TableCell>
                    <TableCell align="center">Бюджет</TableCell>
                    <TableCell align="center">Кассовый доход</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {budget.items.map(row => (
                    <TableRow key={row.Academy}>
                      <TableCell align="center">{row.Academy}</TableCell>
                      <TableCell align="center">{row.KindActivity}</TableCell>
                      <TableCell align="center">{row.BudgetSP}</TableCell>
                      <TableCell align="center">{row.Rub}</TableCell>
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
