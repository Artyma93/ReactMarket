import React from "react";
import MainMiniDrawer from "../../views/MainMiniDrawer";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import axios from "axios";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

class MainMiniDrawerContainer extends React.PureComponent {
  componentDidMount() {}
  render() {
    // const { fetching } = this.props;
    // const { userCourseProfile } = this.props;
    // console.log("props in Container" + { userCourseProfile });
    return (
      <React.Fragment>
        <MainMiniDrawer {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  UsersCourseAuthReducerState: { userCourseAuth, isAuth }
}) => {
  return {
    userCourseAuth: userCourseAuth,
    isAuth: isAuth
  };
};

// const mapDispatchToProps = dispatch => {
//   const { fetchUsersCourseAuto } = bindActionCreators(actions, dispatch);
//   return {
//     fetchUsersCourseAuto: fetchUsersCourseAuto
//   };
// };

// let WithUrlDataContainerComponent = withRouter(MainMiniDrawerContainer);

export default connect(mapStateToProps)(MainMiniDrawerContainer);
