import React from "react";
import UsersCourse from "../../views/UsersCourse";
import { connect } from "react-redux";
import * as actions from "./UsersCourseActions";

class UsersCourseContainer extends React.Component {
  render() {
    const { fetching, usersCourseTable, onRequestUsersCourse, error } = this.props;
    return (
      <React.Fragment>
        <UsersCourse
          fetching={fetching}
          usersCourseTable={usersCourseTable}
          onRequestUsersCourse={onRequestUsersCourse}
          error={error}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ usersCourseState: { fetching, usersCourseTable, error }})  => {
  return {
    fetching: fetching,
    usersCourseTable: usersCourseTable,
    error: error
  };
};

export default connect(mapStateToProps, actions)(UsersCourseContainer);
