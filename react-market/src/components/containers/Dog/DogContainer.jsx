import React from "react";
import Dog from "../../views/Dog";
import { connect } from "react-redux";
import * as actions from "./DogActions";
class DogContainer extends React.Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    return (
      <React.Fragment>
        <Dog
          fetching={fetching}
          dog={dog}
          onRequestDog={onRequestDog}
          error={error}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(DogContainer);

export default connect(mapStateToProps, actions)(DogContainer);