import React from "react";
import BGU from "../../views/BGU";
import { connect } from "react-redux";
import * as actions from "./BGUContainerActions";
// import { bindActionCreators } from "redux";
// import axios from "axios";
import { bindActionCreators } from "redux";

class BGUContainer extends React.PureComponent {
  componentDidMount() {
    // this.props.onRequestUsersCourse(this.props.currentPage);
    // this.props.setCurrentPage(1);
    this.props.fetchBGURequest();
  }
  render() {
    // const { fetching } = this.props;

    return (
      <React.Fragment>
        <BGU {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  bguState: {
    fetching,
    budget,
    error,
    pageSize,
    totalUsersCount,
    currentPage
  }
}) => {
  return {
    fetching: fetching,
    budget: budget,
    error: error,
    pageSize: pageSize,
    totalUsersCount: totalUsersCount,
    currentPage: currentPage
  };
};

const mapDispatchToProps = dispatch => {
  const { setCurrentPage, setTotalUsersCount, fetchBGURequest } = bindActionCreators(
    actions,
    dispatch
  );
  return {
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setTotalUsersCount,
    fetchBGURequest: fetchBGURequest
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BGUContainer);
