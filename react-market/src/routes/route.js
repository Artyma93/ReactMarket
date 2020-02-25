import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LangingPage from "../pages/LandingPage/LangingPage";
import DogPage from "../pages/DogPage/DogPage";
import WeatherforecastPage from "../pages/WeatherforecastPage/WeatherforecastPage";
import UsersCoursePage from "../pages/UsersCoursePage/UsersCoursePage";
import UsersCourseAutoPage from "../pages/UsersCourseAutoPage/UsersCourseAutoPage";
import UsersCourseProfilePage from "../pages/UsersCourseProfilePage/UsersCourseProfilePage";

export default class Routing extends React.Component {
  render() {
    // console.log("routing");
    return (
      <React.Fragment>
        {/* <main> */}
        <Switch>
          <Route path="/" component={LangingPage} exact></Route>
          <Route path="/dog" component={DogPage} exact></Route>
          <Route path="/wfc" component={WeatherforecastPage} exact></Route>
          <Route path="/uc" component={UsersCoursePage} exact></Route>
          <Route path="/ucp" component={UsersCourseProfilePage} exact></Route>
          <Route path="/uca" component={UsersCourseAutoPage} exact></Route>
          <Redirect to="/" />
        </Switch>
        {/* </main> */}
      </React.Fragment>
    );
  }
}
