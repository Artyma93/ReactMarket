import React from "react";
import UsersCourse from "../../views/UsersCourse";
import { connect } from "react-redux";
// import * as actions from "./UsersCourseAutoActions";
import * as actions from "../../../store/actions";
// import { bindActionCreators } from "redux";
// import axios from "axios";
import { bindActionCreators } from "redux";

class UsersCourseAutoContainer extends React.Component {
  componentDidMount() {
    this.props.onRequestUsersCourse(this.props.currentPage);
  }
  render() {
    const {
      fetching,
      usersCourseTable,
      onRequestUsersCourse,
      error,
      pageSize,
      totalUsersCount,
      currentPage
    } = this.props;

    return (
      <React.Fragment>
        <UsersCourse
          fetching={fetching}
          usersCourseTable={usersCourseTable}
          onRequestUsersCourse={onRequestUsersCourse}
          error={error}
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  usersCourseState: {
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

const mapDispatchToProps = dispatch => {
  return {
    onRequestUsersCourse: page => dispatch(actions.fetchUsersCourse(page))
  };
};

// export default connect(mapStateToProps, actions)(UsersCourseAutoContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersCourseAutoContainer);
