import React from "react";
import UsersCourseLoginView from "../../views/UsersCourseLoginView";
import { connect } from "react-redux";
import * as actions from "./UsersCourseLoginActions";

import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

class UsersCourseLoginContainer extends React.Component {
  componentDidMount() {
    // this.props.onRequestUsersCourse(this.props.currentPage);
    // let id = this.props.match.params.id;
    // this.props.fetchUsersCourseAuto();
  }
  render() {
    return (
      <React.Fragment>
        <UsersCourseLoginView {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  UsersCourseAuthReducerState: { fetching, userCourseAuth, error, isAuth }
}) => {
  return {
    fetching: fetching,
    userCourseAuth: userCourseAuth,
    error: error,
    isAuth: isAuth
  };
};

const mapDispatchToProps = dispatch => {
  const { UsersCourseLoginRequest } = bindActionCreators(actions, dispatch);
  return {
    UsersCourseLoginRequest: UsersCourseLoginRequest
  };
};

let WithUrlDataContainerComponent = withRouter(UsersCourseLoginContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
