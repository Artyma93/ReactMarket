import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LangingPage from "../pages/LandingPage/LangingPage";
import DogPage from "../pages/DogPage/DogPage";

export default class Routing extends React.Component {
  render() {
    console.log("routing");
    return (
      <React.Fragment>
        {/* <main> */}
        <Switch>
          <Route path="/" component={LangingPage} exact></Route>
          <Route path="/dog" component={DogPage} exact></Route>
          <Redirect to="/" />
        </Switch>
        {/* </main> */}
      </React.Fragment>
    );
  }
}
