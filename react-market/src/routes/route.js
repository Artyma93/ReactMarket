import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import LangingPage from "../views/LandingPage/LangingPage";
import Test1 from "../views/Test1Page/Test1";
import Test2 from "../views/Test2Page/Test2";
import LangingPage2 from "../views/LandingPage2/LangingPage2";

export default class Routing extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={LangingPage} exact></Route>
          <Route path="/test1" component={Test1} exact></Route>
          <Route path="/test2" component={Test2} exact></Route>
          <Route path="/test3" component={LangingPage2} exact></Route>
          <Redirect to="/" />
        </Switch>
      </main>
    );
  }
}
