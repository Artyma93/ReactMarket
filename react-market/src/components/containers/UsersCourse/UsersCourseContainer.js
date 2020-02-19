import React from "react";
import UsersCourse from "../../views/UsersCourse";
import { connect } from "react-redux";
import * as actions from "./UsersCourseActions";
// import { bindActionCreators } from "redux";
// import axios from "axios";
import { bindActionCreators } from "redux";

class UsersCourseContainer extends React.Component {
  // constructor(props) {
  //   super(props);

  //   axios
  //     .get("https://social-network.samuraijs.com/api/1.0/users")
  //     .then(response => {
  //       this.props.usersCourseTable(response.data.items);
  //     });
  // }

  // constructor(props) {
  //   super(props);
  //   // actions.onRequestUsersCourse();
  //   // store.actions.onRequestUsersCourse();

  // }

  componentDidMount() {
    // this.props.onRequestUsersCourse();
    // const store = this.props.store
    // const {dispatch} = this.props.store;
    //  const act = store.bindActionCreators(actions.onRequestUsersCourse, dispatch);
    //  act();
    // axios
    //   .get("https://social-network.samuraijs.com/api/1.0/users")
    //   .then(response => {
    //     this.props.usersCourseTable(response.data.items);
    //   });
    // actions.onRequestUsersCourse();
    // const { dispatch } = this.props;
    // dispatch({ type: "API_CALL_REQUEST_UC" });
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

const mapDispatchToProps = dispatch => {
  const { onRequestUsersCourse } = bindActionCreators(actions, dispatch);

  return {
    onRequestUsersCourse
  };
};

// const mapDispatchToProps = dispatch => {
//   // const { onRequestUsersCoursePagination } = bindActionCreators(actions, dispatch);
//   const { onRequestUsersCourse } = bindActionCreators(actions, dispatch);
//   return {
//     onRequestUsersCourse
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onRequestUsersCourse: page => dispatch(actions.fetchUsersCourse(page))
//   };
// };

// export default connect(mapStateToProps, actions)(UsersCourseContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersCourseContainer);
