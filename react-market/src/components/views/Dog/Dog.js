import React, { Component } from "react";
import logo from "../../../assets/img/logo.svg";
import Container from "@material-ui/core/Container";

export default class Dog extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    return (
      <React.Fragment>
        <Container maxWidth="sm" width={100}>
          <div className="App">
            <header className="App-header">
              <img
                src={dog || logo}
                className="App-logo"
                alt="logo"
                width={400}
              />
              <h1 className="App-title">Welcome to Dog Saga</h1>
            </header>

            {dog ? (
              <p className="App-intro">Keep clicking for new dogs</p>
            ) : (
              <p className="App-intro">Replace the React icon with a dog!</p>
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
        </Container>
      </React.Fragment>
    );
  }
}
