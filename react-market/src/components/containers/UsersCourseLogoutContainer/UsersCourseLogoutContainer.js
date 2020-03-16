import React from "react";
import { UsersCourseLogoutView } from "../../views/UsersCourseLogoutView";
import { connect } from "react-redux";
import * as actions from "./UsersCourseLogoutActions";

import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

class UsersCourseLogoutContainer extends React.Component {
  componentDidMount() {
    // this.props.onRequestUsersCourse(this.props.currentPage);
    // let id = this.props.match.params.id;
    // this.props.fetchUsersCourseAuto();
  }
  // debugger;
  render() {
    return (
      <React.Fragment>
        <UsersCourseLogoutView {...this.props} />
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
  const { UsersCourseLogoutRequest } = bindActionCreators(actions, dispatch);
  return {
    UsersCourseLogoutRequest: UsersCourseLogoutRequest
  };
};

// let WithUrlDataContainerComponent = withRouter(UsersCourseLogoutContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersCourseLogoutContainer);
