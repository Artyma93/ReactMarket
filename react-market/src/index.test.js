import React from "react";
import ReactDOM from "react-dom";
import App from "./index";

it("render APP", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
