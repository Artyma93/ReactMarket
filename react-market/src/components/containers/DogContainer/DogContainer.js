import React from "react";
import Dog from "../../views/Dog";
import { connect } from "react-redux";
import * as actions from "./DogActions";

class DogContainer extends React.Component {
  render() {
    // console.log("DogContainer");
    // debugger
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

// const mapStateToProps = store => {
//   return {
//     fetching: store.dogState.fetching,
//     dog: store.dogState.dog,
//     error: store.dogState.error
//   };
// };

const mapStateToProps = ({ dogState: { fetching, dog, error }})  => {
  return {
    fetching: fetching,
    dog: dog,
    error: error
  };
};

export default connect(mapStateToProps, actions)(DogContainer);
