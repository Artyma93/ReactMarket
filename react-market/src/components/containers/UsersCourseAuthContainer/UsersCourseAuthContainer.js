import React from "react";
import UsersCourseLogin from "../../views/UsersCourseLogin";
import { connect } from "react-redux";
import * as actions from "./UsersCourseAuthActions";
// import { bindActionCreators } from "redux";
// import axios from "axios";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

class UsersCourseAuthContainer extends React.Component {
  componentDidMount() {
    // this.props.onRequestUsersCourse(this.props.currentPage);
    // let id = this.props.match.params.id;
    this.props.fetchUsersCourseAuto();
  }
  render() {
    // const { fetching } = this.props;
    // const { userCourseProfile } = this.props;
    // console.log("props in Container" + { userCourseProfile });
    return (
      <React.Fragment>
        <UsersCourseLogin {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  UsersCourseAuthReducerState: { fetching, userCourseAuth, error }
}) => {
  return {
    fetching: fetching,
    userCourseAuth: userCourseAuth,
    error: error
  };
};

const mapDispatchToProps = dispatch => {
  const { fetchUsersCourseAuto } = bindActionCreators(actions, dispatch);
  return {
    fetchUsersCourseAuto: fetchUsersCourseAuto
  };
};

let WithUrlDataContainerComponent = withRouter(UsersCourseAuthContainer);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UsersCourseProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
