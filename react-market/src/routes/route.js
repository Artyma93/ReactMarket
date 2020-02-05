import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import LangingPage from "../pages/LandingPage/LangingPage";
import Test1 from "../pages/Test1Page/Test1";
import Test2 from "../pages/Test2Page/Test2";
import Test3 from "../pages/Test3Page/Test3";
import LangingPage2 from "../pages/LandingPage2/LangingPage2";

export default class Routing extends React.Component {
  render() {
    console.log("routing");
    return (
      <main>
        <Switch>
          <Route path="/" component={LangingPage} exact></Route>
          <Route path="/test1" component={Test1} exact></Route>
          <Route path="/test2" component={Test2} exact></Route>
          <Route path="/test3" component={Test3} exact></Route>
          <Route path="/lp2" component={LangingPage2} exact></Route>
          <Redirect to="/" />
        </Switch>
      </main>
    );
  }
}
