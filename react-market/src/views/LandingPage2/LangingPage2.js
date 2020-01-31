import React, { Component } from "react";
import Header from "../../components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import * as actions from "./LandingPage2Actions";

import Test1 from "../Test1Page/Test1";

import logo from "../../assets/img/logo.svg";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    return (
      <div>
        <Container maxWidth="xl">
          <Header />
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          >
            <div>
              <div className="App">
                <header className="App-header">
                  <img src={dog || logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to Dog Saga</h1>
                </header>

                {dog ? (
                  <p className="App-intro">Keep clicking for new dogs</p>
                ) : (
                  <p className="App-intro">
                    Replace the React icon with a dog!
                  </p>
                )}

                {fetching ? (
                  <button disabled>Fetching...</button>
                ) : (
                  <button onClick={onRequestDog}>Request a Dog</button>
                )}

                {error && (
                  <p style={{ color: "red" }}>Uh oh - something went wrong!</p>
                )}
              </div>
            </div>
          </Typography>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, actions)(App);
