import React from "react";
import UsersCourse from "../../views/UsersCourse";
import { connect } from "react-redux";
import * as actions from "./UsersCourseActions";
// import { bindActionCreators } from "redux";

class UsersCourseContainer extends React.Component {
  componentDidMount() {
    // const store = this.props.store
    // const {dispatch} = this.props.store;
    //  const act = store.bindActionCreators(actions.onRequestUsersCourse, dispatch);
    //  act();
  }
  render() {
    const {
      fetching,
      usersCourseTable,
      onRequestUsersCourse,
      error
    } = this.props;
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

const mapStateToProps = (
  { usersCourseState: { fetching, usersCourseTable, error } },
  store
) => {
  return {
    fetching: fetching,
    usersCourseTable: usersCourseTable,
    error: error,
    store: store
  };
};

export default connect(mapStateToProps, actions)(UsersCourseContainer);
