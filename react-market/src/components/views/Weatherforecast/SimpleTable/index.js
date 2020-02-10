import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import axios from "axios";

// import logo from "../../../../assets/img/logo.svg";
import Container from "@material-ui/core/Container";
// import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
// ];

export default function SimpleTable(props) {
  const classes = useStyles();
  const {
    fetching,
    weatherforecastTable,
    onRequestWeatherforecast,
    error
  } = props;

//   const sd = axios
//     .get("https://localhost:44349/weatherforecast")
//     .then(response => response.data.message);
//   console.log(sd);
//   console.log(weatherforecastTable);
  return (
    <React.Fragment>
      <Container maxWidth="lg" width={100}>
        <div className="App">
          {weatherforecastTable ? (
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
                  {weatherforecastTable.map(row => (
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
            <p className="App-intro">Replace the React icon with a dog!</p>
          )}

          {fetching ? (
            <button disabled>Fetching...</button>
          ) : (
            <button onClick={onRequestWeatherforecast}>
              Request a Weatherforecast
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
