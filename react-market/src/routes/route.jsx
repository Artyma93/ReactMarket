import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import LangingPage from "../pages/LandingPage/LangingPage";
import Test1 from "../pages/Test1/Test1";

export default class Routing extends React.Component {
  render() {
    console.log("routing");
    return (
      <React.Fragment>
      {/* <main> */}
        <Switch>
          <Route path="/" component={LangingPage} exact></Route>
          <Route path="/test1" component={Test1} exact></Route>
          <Redirect to="/" />
        </Switch>
      {/* </main> */}
      </React.Fragment>
    );
  }
}
