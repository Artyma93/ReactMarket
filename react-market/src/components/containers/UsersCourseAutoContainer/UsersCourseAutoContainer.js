import React from "react";
import UsersCourseAuto from "../../views/UsersCourseAuto";
import { connect } from "react-redux";
import * as actions from "./UsersCourseAutoActions";
// import { bindActionCreators } from "redux";
// import axios from "axios";
import { bindActionCreators } from "redux";

import UsersCourseAuthRedirect from "../../../hoc/UsersCourseAuthRedirectHOC";

import { compose } from "redux";



class UsersCourseAutoContainer extends React.PureComponent {
  componentDidMount() {
    // this.props.onRequestUsersCourse(this.props.currentPage);
    this.props.setCurrentPage(1);
  }
  render() {
    const {
      fetching,
      usersCourseTable,
      error,
      pageSize,
      totalUsersCount,
      currentPage,
      setCurrentPage,
      setTotalUsersCount,
      UsersCourseAutoFollowedStart,
      isfollowingInProgress
    } = this.props;

    return (
      <React.Fragment>
        <UsersCourseAuto
          fetching={fetching}
          usersCourseTable={usersCourseTable}
          error={error}
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setTotalUsersCount={setTotalUsersCount}
          UsersCourseAutoFollowedStart={UsersCourseAutoFollowedStart}
          isfollowingInProgress={isfollowingInProgress}
        />
      </React.Fragment>
    );
  }
}
// Вариант 1
// const mapStateToProps = ({
//   usersCourseAutoState: {
//     fetching,
//     usersCourseTable,
//     error,
//     pageSize,
//     totalUsersCount,
//     currentPage,
//     isfollowingInProgress
//   }
// }) => {
//   return {
//     fetching: fetching,
//     usersCourseTable: usersCourseTable,
//     error: error,
//     pageSize: pageSize,
//     totalUsersCount: totalUsersCount,
//     currentPage: currentPage,
//     isfollowingInProgress: isfollowingInProgress
//   };
// };
//==== Конец Вариант 1

const mapStateToProps = state => {
  return {
    fetching: state.usersCourseAutoState.fetching,
    usersCourseTable: state.usersCourseAutoState.usersCourseTable,
    error: state.usersCourseAutoState.error,
    pageSize: state.usersCourseAutoState.pageSize,
    totalUsersCount: state.usersCourseAutoState.totalUsersCount,
    currentPage: state.usersCourseAutoState.currentPage,
    isfollowingInProgress: state.usersCourseAutoState.isfollowingInProgress
  };
};

// const mapDispatchToProps = dispatch => {
//   const { onRequestUsersCourse } = bindActionCreators(actions, dispatch);

//   return {
//     onRequestUsersCourse
//   };
// };

// const mapDispatchToProps = dispatch => {
//   // const { onRequestUsersCoursePagination } = bindActionCreators(actions, dispatch);
//   const { onRequestUsersCourse } = bindActionCreators(actions, dispatch);
//   return {
//     onRequestUsersCourse
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onRequestUsersCourse: page => dispatch(actions.fetchUsersCourseAuto(page))
//   };
// };

// Этот вариант тоже работает
// const mapDispatchToProps = dispatch => {
//   const { fetchUsersCourseAuto } = bindActionCreators(actions, dispatch);
//   return {
//     onRequestUsersCourse: fetchUsersCourseAuto,
//     setCurrentPage: pageNumber => {
//       dispatch(actions.setCurrentPage(pageNumber));
//     }
//   };
// };

const mapDispatchToProps = dispatch => {
  const {
    setCurrentPage,
    setTotalUsersCount,
    UsersCourseAutoFollowedStart
  } = bindActionCreators(actions, dispatch);
  return {
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setTotalUsersCount,
    UsersCourseAutoFollowedStart: UsersCourseAutoFollowedStart
  };
};

// export default connect(mapStateToProps, actions)(UsersCourseAutoContainer);

// const withUsersCourseAuthRedirect = UsersCourseAuthRedirect(
//   UsersCourseAutoContainer
// );

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withUsersCourseAuthRedirect);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  UsersCourseAuthRedirect
)(UsersCourseAutoContainer);
