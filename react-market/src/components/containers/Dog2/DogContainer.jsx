import React from "react";
import Dog from "../../views/Dog";
import { connect } from "react-redux";
import * as actions from "./DogActions";
class DogContainer extends React.Component {
  render() {
    console.log("DogContainer");
    // const { fetching, dog, onRequestDog, error } = this.props;
    // return (
    //   <React.Fragment>
    //     <Dog
    //       fetching={fetching}
    //       dog={dog}
    //       onRequestDog={onRequestDog}
    //       error={error}
    //     />
    //   </React.Fragment>
    // );

    // const { dog } = this.props;
    // return (
    //   <React.Fragment>
    //     <Dog
    //       fetching={dog.fetching}
    //       dog={dog.dog}
    //       onRequestDog={dog.onRequestDog}
    //       error={dog.error}
    //     />
    //   </React.Fragment>
    // );

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

// const mapStateToProps = state => {
//   return {
//     fetching: state.fetching,
//     dog: state.dog,
//     error: state.error
//   };
// };

// const mapStateToProps = store => {
//   return {
//     dog: store.dogReducer
//   };
// };

const mapStateToProps = store => {
  return {
    fetching: store.dogState.fetching,
    dog: store.dogState.dog,
    error: store.dogState.error
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(DogContainer);

export default connect(mapStateToProps, actions)(DogContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(DogContainer);