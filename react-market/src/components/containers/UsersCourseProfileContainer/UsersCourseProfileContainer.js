import React from "react";
import UsersCourseProfile from "../../views/UsersCourseProfile";
import { connect } from "react-redux";
import * as actions from "./UsersCourseProfileActions";
// import { bindActionCreators } from "redux";
// import axios from "axios";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

class UsersCourseProfileContainer extends React.PureComponent {
  componentDidMount() {
    // this.props.onRequestUsersCourse(this.props.currentPage);
    let id = this.props.match.params.id;
    this.props.fetchUsersCourseAuto(id);
  }
  render() {
    // const { fetching } = this.props;
    // const { userCourseProfile } = this.props;
    // console.log("props in Container" + { userCourseProfile });
    return (
      <React.Fragment>
        <UsersCourseProfile {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  UsersCourseProfileState: { fetching, userCourseProfile, error }
}) => {
  return {
    fetching: fetching,
    userCourseProfile: userCourseProfile,
    error: error
  };
};

const mapDispatchToProps = dispatch => {
  const { fetchUsersCourseAuto } = bindActionCreators(actions, dispatch);
  return {
    fetchUsersCourseAuto: fetchUsersCourseAuto
  };
};

let WithUrlDataContainerComponent = withRouter(UsersCourseProfileContainer);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UsersCourseProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
