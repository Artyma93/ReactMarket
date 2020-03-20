import React from "react";

// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import { compose } from "redux";
import CalendarView from "../../views/CalendarView";
// import { bindActionCreators } from "redux";
// import * as actions from "./AppContainerActions";
export class CalendarContainer extends React.Component {
  //   componentDidMount() {
  //     // this.props.AppInitialazedStart();
  //   }

  render() {
    return <CalendarView  />;
  }
}

// const mapStateToProps = ({
//   AppContainerReducerState: {
//     initializedStart,
//     initializedSuccess,
//     initializedFail
//   }
// }) => {
//   return {
//     initializedStart: initializedStart,
//     initializedSuccess: initializedSuccess,
//     initializedFail: initializedFail
//   };
// };

// const mapDispatchToProps = dispatch => {
//   const { AppInitialazedStart } = bindActionCreators(actions, dispatch);
//   return {
//     AppInitialazedStart: AppInitialazedStart
//   };
// };

// export default compose(withRouter, connect(null, mapDispatchToProps)(App));

// export default <CalendarContainer />;
