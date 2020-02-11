import React from "react";
// import {AppBar, ToolBar, Typography} from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
// import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./header.css";
import ScrollableTabsButtonAuto from "./AutomaticScrollButtons";

export default props => (
  <AppBar position="sticky" color="default">
    <ToolBar>
      <div className="header d-flex">
        {/* <h3>
          <Link to="/">Home</Link>
        </h3> */}
        <ul className="d-flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dog/">Dog</Link>
          </li>
          <li>
            <Link to="/wfc/">WFC</Link>
          </li>
          <li>
            <Link to="/uc/">UC</Link>
          </li>
        </ul>
      </div>
    </ToolBar>
    {/* <ScrollableTabsButtonAuto /> */}
  </AppBar>
  // <div className="header d-flex">
  //   <h3>
  //     <Link to="/">StarDB</Link>
  //   </h3>
  //   <ul className="d-flex">
  //     <li>
  //       <Link to="/people/">People</Link>
  //     </li>
  //   </ul>
  // </div>
);
