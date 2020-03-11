// import React from "react";
// import UsersCourseLoginView from "../../views/UsersCourseLoginView";
// import { connect } from "react-redux";
// // import * as actions from "./UsersCourseAuthActions";
// // import { bindActionCreators } from "redux";
// // import axios from "axios";
// import { bindActionCreators } from "redux";
// import { withRouter } from "react-router-dom";

import UsersCourseLoginContainer from "./UsersCourseLoginContainer";

export default UsersCourseLoginContainer;

// class UsersCourseLoginContainer2 extends React.Component {
//   componentDidMount() {
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <UsersCourseLoginView {...this.props} />
//       </React.Fragment>
//     );
//   }
// }

// const mapStateToProps = ({
//   UsersCourseAuthReducerState: { fetching, userCourseAuth, error }
// }) => {
//   return {
//     fetching: fetching,
//     userCourseAuth: userCourseAuth,
//     error: error
//   };
// };

// // const mapDispatchToProps = dispatch => {
// //   const { fetchUsersCourseAuto } = bindActionCreators(actions, dispatch);
// //   return {
// //     fetchUsersCourseAuto: fetchUsersCourseAuto
// //   };
// // };

// let WithUrlDataContainerComponent = withRouter(UsersCourseLoginContainer);

// // export default connect(
// //   mapStateToProps,
// //   mapDispatchToProps
// // )(UsersCourseProfileContainer);

// export default connect(
//   mapStateToProps
// )(UsersCourseLoginContainer);
