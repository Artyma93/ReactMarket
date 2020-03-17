import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LangingPage from "../pages/LandingPage/LangingPage";
import DogPage from "../pages/DogPage/DogPage";
import WeatherforecastPage from "../pages/WeatherforecastPage/WeatherforecastPage";
import UsersCoursePage from "../pages/UsersCourse/UsersCoursePage/UsersCoursePage";
import UsersCourseAutoPage from "../pages/UsersCourse/UsersCourseAutoPage/UsersCourseAutoPage";
import UsersCourseProfilePage from "../pages/UsersCourse/UsersCourseProfilePage/UsersCourseProfilePage";
import UsersCourseAuthPage from "../pages/UsersCourse/UsersCourseAuthPage/UsersCourseAuthPage";
import UsersCourseOwnProfilePage from "../pages/UsersCourse/UsersCourseOwnProfilePage/UsersCourseOwnProfilePage";
import UsersCourseLoginPage from "../pages/UsersCourse/UsersCourseLoginPage/UsersCourseLoginPage";

import BGUPage from "../pages/BGUPage";

import MaterialUiForm from "../../src/components/views/UsersCourseLoginView/MaterialUiForm";

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
          <Route
            path="/ucp/:id"
            component={UsersCourseProfilePage}
            exact
          ></Route>
          <Route path="/uca" component={UsersCourseAutoPage} exact></Route>
          <Route path="/bgu" component={BGUPage} exact></Route>
          <Route path="/auth" component={UsersCourseAuthPage} exact></Route>
          <Route path="/login" component={UsersCourseLoginPage} exact></Route>
          <Route
            path="/profile"
            component={UsersCourseOwnProfilePage}
            exact
          ></Route>
          <Route path="/m" component={MaterialUiForm} exact />
          <Redirect to="/" />
        </Switch>
        {/* </main> */}
      </React.Fragment>
    );
  }
}
