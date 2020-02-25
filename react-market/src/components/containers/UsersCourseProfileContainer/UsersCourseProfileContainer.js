import React from "react";
import UsersCourseProfile from "../../views/UsersCourseProfile";
import { connect } from "react-redux";
import * as actions from "./UsersCourseProfileActions";
// import { bindActionCreators } from "redux";
// import axios from "axios";
import { bindActionCreators } from "redux";

class UsersCourseProfileContainer extends React.Component {
  componentDidMount() {
    // this.props.onRequestUsersCourse(this.props.currentPage);
    // this.props.setCurrentPage(1);
  }
  render() {
    // const { fetching } = this.props;

    return (
      <React.Fragment>
        <UsersCourseProfile {...this.props} />
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

const mapDispatchToProps = dispatch => {
  const { setCurrentPage, setTotalUsersCount } = bindActionCreators(
    actions,
    dispatch
  );
  return {
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setTotalUsersCount
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersCourseProfileContainer);