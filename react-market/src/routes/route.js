import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import LangingPage from "../pages/LandingPage/LangingPage";


export default class Routing extends React.Component {
  render() {
    console.log("routing");
    return (
      <main>
        <Switch>
          <Route path="/" component={LangingPage} exact></Route>
          <Redirect to="/" />
        </Switch>
      </main>
    );
  }
}
