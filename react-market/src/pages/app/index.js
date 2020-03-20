import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "../../routes/route";
import AppContainer from "../../components/containers/AppContainer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import * as actions from "../../components/containers/AppContainer/AppContainerActions";
// export default class App extends React.Component {
export class App extends React.Component {
  componentDidMount() {
    this.props.AppInitialazedStart();
  }

  debugger;

  render() {
    if (!this.props.initializedSuccess) {
      return (
        <>
          <h1>Load</h1>
          {console.log("Load")}
        </>
      );
    } else {
      return (
        <>
          <Router>
            <Routing />
            {/* <AppContainer {...this.props} /> */}
          </Router>
        </>
      );
    }
  }
}

const mapStateToProps = ({
  AppContainerReducerState: {
    initializedStart,
    initializedSuccess,
    initializedFail
  }
}) => {
  return {
    initializedStart: initializedStart,
    initializedSuccess: initializedSuccess,
    initializedFail: initializedFail
  };
};

const mapDispatchToProps = dispatch => {
  const { AppInitialazedStart } = bindActionCreators(actions, dispatch);
  return {
    AppInitialazedStart: AppInitialazedStart
  };
};

// export default compose(
//   withRouter,
//   connect(mapStateToProps, mapDispatchToProps)(App)
// );

export default connect(mapStateToProps, mapDispatchToProps)(App);
