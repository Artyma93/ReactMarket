import React from "react";
import UsersCourseAuto from "../../views/UsersCourseAuto";
import { connect } from "react-redux";
import * as actions from "./UsersCourseAutoActions";
// import { bindActionCreators } from "redux";
// import axios from "axios";
import { bindActionCreators } from "redux";

class UsersCourseAutoContainer extends React.Component {
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
      setCurrentPage
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
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  usersCourseAutoState: {
    fetching,
    usersCourseTable,
    error,
    pageSize,
    totalUsersCount,
    currentPage
  }
}) => {
  return {
    fetching: fetching,
    usersCourseTable: usersCourseTable,
    error: error,
    pageSize: pageSize,
    totalUsersCount: totalUsersCount,
    currentPage: currentPage
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
  const { setCurrentPage } = bindActionCreators(
    actions,
    dispatch
  );
  return {

    setCurrentPage: setCurrentPage
  };
};

// export default connect(mapStateToProps, actions)(UsersCourseAutoContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersCourseAutoContainer);
