import React from "react";
import Header from "../../views/Header";

class HeaderContainer extends React.Component {
  render() {
    console.log("HeaderContainer");
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default HeaderContainer;
